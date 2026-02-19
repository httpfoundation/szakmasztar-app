import { LngLatBounds } from "maplibre-gl";
import type { ArticleFragment } from "@/actions/articles/articles.generated";
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
 * Creates a GeoJSON polygon by transforming SVG coordinates to geo coordinates
 */
export function createRelativePolygon(
  item: InteractiveMapData["buildings"][number]["booths"][number],
  config: BuildingConfig
): [number, number][] {
  const geoCoords = item.coordinates.map(([x, y]) => transformToGeoCoords(x, y, config));

  if (
    geoCoords.length > 0 &&
    (geoCoords[0][0] !== geoCoords[geoCoords.length - 1][0] ||
      geoCoords[0][1] !== geoCoords[geoCoords.length - 1][1])
  ) {
    geoCoords.push(geoCoords[0]);
  }

  return geoCoords;
}

export const generateBuildingsGeoJSON = (mapData: InteractiveMapData) => {
  const features = mapData.buildings.map((building) => {
    return {
      type: "Feature" as const,
      properties: {
        id: building.id,
        name: building.name,
        color: building.color,
        hoverColor: building.hoverColor,
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

      const imageUrl = booth.image?.url ?? false;
      const imageRotate = booth.imageRotate ?? false;

      // Calculate booth bounding box dimensions in degrees for image sizing
      const lngs = coordinates.map((c) => c[0]);
      const lats = coordinates.map((c) => c[1]);
      const boothWidthDeg = Math.max(...lngs) - Math.min(...lngs);
      const boothHeightDeg = Math.max(...lats) - Math.min(...lats);
      // When rotated, the image width aligns with the booth height
      const boothSizeDeg = imageRotate ? boothHeightDeg : boothWidthDeg;

      const properties: Record<string, unknown> = {
        id: booth.id,
        name: booth.title,
        code: booth.code?.toString().padStart(2, "0") ?? false,
        articleSlugs: JSON.stringify(booth.articles.map((a) => a.slug)),
        type: "booth",
        image: imageUrl,
        imageId: imageUrl ? `booth-img-${booth.id}` : false,
        imageRotate,
        boothSizeDeg,
        hasArticles: booth.articles.length > 0,
      };

      return {
        type: "Feature" as const,
        properties,
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
