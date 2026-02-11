import { LngLatBounds } from "maplibre-gl";
import type { InteractiveMapData } from "./InteractiveMap";

/**
 * Transforms SVG pixel coordinates to geographic coordinates
 * Uses bilinear interpolation between the building corners
 */
export function transformToGeoCoords(
  x: number,
  y: number,
  config: BuildingConfig
): [number, number] {
  // Normalize coordinates to 0-1 range
  const nx = x / config.svgWidth;
  const ny = y / config.svgHeight;

  // Bilinear interpolation between corners
  // Top edge interpolation
  const topLng = config.topLeft[0] + (config.topRight[0] - config.topLeft[0]) * nx;
  const topLat = config.topLeft[1] + (config.topRight[1] - config.topLeft[1]) * nx;

  // Bottom edge interpolation
  const bottomLng = config.bottomLeft[0] + (config.bottomRight[0] - config.bottomLeft[0]) * nx;
  const bottomLat = config.bottomLeft[1] + (config.bottomRight[1] - config.bottomLeft[1]) * nx;

  // Interpolate between top and bottom
  const lng = topLng + (bottomLng - topLng) * ny;
  const lat = topLat + (bottomLat - topLat) * ny;

  return [lng, lat];
}

/**
 * Creates a GeoJSON polygon from booth coordinates
 */
export function createRelativePolygon(
  item:
    | InteractiveMapData["buildings"][number]["booths"][number]
    | InteractiveMapData["buildings"][number]["articles"][number],
  config: BuildingConfig
): [number, number][] {
  const { x, y, width, height } = item;

  // Create corner points of the booth rectangle
  const topLeft = transformToGeoCoords(x, y, config);
  const topRight = transformToGeoCoords(x + width, y, config);
  const bottomRight = transformToGeoCoords(x + width, y + height, config);
  const bottomLeft = transformToGeoCoords(x, y + height, config);

  // Return closed polygon (first point repeated at end)
  return [topLeft, topRight, bottomRight, bottomLeft, topLeft];
}

/**
 * Generates GeoJSON FeatureCollection for all booth items
 */
/*
export function generateBoothsGeo
JSON(mapItems: EventMapItem[]) {
  const buildingConfigs = getBuildingConfigs();

  const features = mapItems
    .filter((item) => item.stand && item.mapId)
    .map((item) => {
      const config = buildingConfigs[item.mapId];

      if (!config) return null;

      const coordinates = createBoothPolygon(item, config);
      const center = transformToGeoCoords(
        item.stand.x + item.stand.width / 2,
        item.stand.y + item.stand.height / 2,
        config
      );

      // Determine booth color based on href
      let color = "#6b7280"; // default gray
      if (item.href.includes("wshu")) {
        color = "#007bff"; // WSHU blue
      } else if (item.href.includes("osztv")) {
        color = "#28a745"; // OSZTV green
      } else if (item.href.includes("nak")) {
        color = "#dc3545"; // NAK red
      } else if (item.href.includes("interaktiv")) {
        color = "#6f42c1"; // Interactive purple
      }

      return {
        type: "Feature" as const,
        properties: {
          name: item.text,
          href: item.href,
          jumpCode: item.jumpCode,
          mapId: item.mapId,
          color,
          eventType: item.stand.eventType,
          centerLng: center[0],
          centerLat: center[1],
        },
        geometry: {
          type: "Polygon" as const,
          coordinates: [coordinates],
        },
      };
    })
    .filter((f): f is NonNullable<typeof f> => f !== null);

  return {
    type: "FeatureCollection" as const,
    features,
  };
}
*/
export const generateBuildingsGeoJSON = (mapData: InteractiveMapData) => {
  const features = mapData.buildings.map((building) => {
    return {
      type: "Feature" as const,
      properties: {
        name: building.name,
        color: building.color,
        type: "building",
      },
      geometry: {
        type: "Polygon" as const,
        coordinates: [building.coordinates],
      },
    };
  });

  return {
    type: "FeatureCollection" as const,
    features,
  };
};

export const getBuildingBounds = (building: InteractiveMapData["buildings"][number]) => {
  const bounds = new LngLatBounds();

  for (const coordinate of building.coordinates) {
    bounds.extend(coordinate);
  }

  return bounds;
};

/**
 * Building configuration for coordinate transformation
 * Maps SVG pixel space to geographic coordinates
 */
export type BuildingConfig = {
  svgWidth: number;
  svgHeight: number;
  // Geographic bounding box of the building
  topLeft: [number, number]; // [lng, lat]
  topRight: [number, number];
  bottomLeft: [number, number];
  bottomRight: [number, number];
};
export const getBuildingConfig = (
  building: InteractiveMapData["buildings"][number]
): BuildingConfig => {
  const bounds = getBuildingBounds(building);

  const topLeft = bounds.getNorthWest();
  const topRight = bounds.getNorthEast();
  const bottomLeft = bounds.getSouthWest();
  const bottomRight = bounds.getSouthEast();

  return {
    svgWidth: building.svgWidth,
    svgHeight: building.svgHeight,
    topLeft: [topLeft.lng, topLeft.lat],
    topRight: [topRight.lng, topRight.lat],
    bottomLeft: [bottomLeft.lng, bottomLeft.lat],
    bottomRight: [bottomRight.lng, bottomRight.lat],
  };
};

export const generateBoothsGeoJSON = (mapData: InteractiveMapData) => {
  const features = mapData.buildings.map((building) => {
    if (!building.coordinates.length) return null;
    const buildingConfig = getBuildingConfig(building);

    return building.booths.map((booth) => {
      const coordinates = createRelativePolygon(booth, buildingConfig);
      const center = transformToGeoCoords(
        booth.x + booth.width / 2,
        booth.y + booth.height / 2,
        buildingConfig
      );

      return {
        type: "Feature" as const,
        properties: {
          name: booth.title,
          centerLng: center[0],
          centerLat: center[1],
          type: "booth",
        },
        geometry: {
          type: "Polygon" as const,
          coordinates: [coordinates],
        },
      };
    });
  });

  return {
    type: "FeatureCollection" as const,
    features: features.flat().filter((f): f is NonNullable<typeof f> => f !== null),
  };
};

export const generateArticlesGeoJSON = (mapData: InteractiveMapData) => {
  const features = mapData.buildings.map((building) => {
    if (!building.coordinates.length) return null;
    const buildingConfig = getBuildingConfig(building);

    console.log(building.name, building.articles);

    return building.articles.map((article) => {
      const coordinates = createRelativePolygon(article, buildingConfig);
      const center = transformToGeoCoords(
        article.x + article.width / 2,
        article.y + article.height / 2,
        buildingConfig
      );

      return {
        type: "Feature" as const,
        properties: {
          name: article.title,
          centerLng: center[0],
          centerLat: center[1],
          type: "article",
          hasParentBooth: article.hasParentBooth,
        },
        geometry: {
          type: "Polygon" as const,
          coordinates: [coordinates],
        },
      };
    });
  });

  return {
    type: "FeatureCollection" as const,
    features: features.flat().filter((f): f is NonNullable<typeof f> => f !== null),
  };
};
