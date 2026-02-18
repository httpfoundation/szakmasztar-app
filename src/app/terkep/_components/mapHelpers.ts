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
 * Creates a GeoJSON polygon by transforming SVG coordinates to geo coordinates
 */
export function createRelativePolygon(
  item:
    | InteractiveMapData["buildings"][number]["booths"][number]
    | InteractiveMapData["buildings"][number]["articles"][number],
  config: BuildingConfig
): [number, number][] {
  const geoCoords = item.coordinates.map(([x, y]) => transformToGeoCoords(x, y, config));

  // Ensure the polygon is closed (first point repeated at end)
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

const getCategoryIcon = (slug: string): string | undefined => {
  if (slug.startsWith("wshu")) {
    return "wshu";
  } else if (slug.startsWith("osztvszktv")) {
    return "osztv-szktv";
  } else if (
    slug.startsWith("interaktiv-szakmabemutato") ||
    slug.startsWith("egyeb-szakmabemutato")
  ) {
    return "szakmabemutato";
  } else if (slug.startsWith("nak")) {
    return "nak";
  }

  return undefined;
};

/** Max number of article slots for inline icon display in format expressions */
export const MAX_BOOTH_ARTICLES = 10;

export const generateBoothsGeoJSON = (mapData: InteractiveMapData) => {
  let boothCounter = 0;
  const features = mapData.buildings.map((building) => {
    if (!building.coordinates.length) return null;
    const buildingConfig = getBuildingConfig(building);

    return building.booths.map((booth) => {
      boothCounter++;
      const coordinates = createRelativePolygon(booth, buildingConfig);

      const articles = building.articles.filter((article) => booth.articleIds.includes(article.id));
      const combinedIcon = [...new Set(articles.map((article) => getCategoryIcon(article.slug)))]
        .filter(Boolean)
        .sort()
        .join("_");

      const properties: Record<string, unknown> = {
        id: booth.id,
        name: booth.title,
        boothNumber: `${boothCounter < 10 ? "0" : ""}${boothCounter}.`,
        articleNames: articles.map((article) => article.title).join("\n"),
        combinedIcon,
        type: "booth",
      };

      // Add per-article properties for inline icon display (max MAX_BOOTH_ARTICLES)
      const cappedArticles = articles.slice(0, MAX_BOOTH_ARTICLES);
      for (let i = 0; i < cappedArticles.length; i++) {
        const article = cappedArticles[i];
        const icon = getCategoryIcon(article.slug);
        if (icon) {
          properties[`article_${i}_icon`] = `${icon}-sm`;
        }
        const isLast = i === cappedArticles.length - 1;
        properties[`article_${i}_text`] = (icon ? " " : "") + article.title + (isLast ? "" : "\n");
      }

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

/** Map from category key to SVG symbol image name loaded in the map */
const CATEGORY_SYMBOL_MAP: Record<string, string> = {
  wshu: "wshu-symbol",
  "osztv-szktv": "osztv-symbol",
  szakmabemutato: "sponsor-symbol",
  nak: "nak-symbol",
};

/**
 * Generates Point features along the bottom-right corner of each booth polygon,
 * one per unique category. Multiple categories are spread horizontally from right
 * to left along the bottom edge, creating a row of watermark symbols.
 */
export const generateBoothSymbolsGeoJSON = (mapData: InteractiveMapData) => {
  const features = mapData.buildings.flatMap((building) => {
    if (!building.coordinates.length) return [];
    const buildingConfig = getBuildingConfig(building);

    return building.booths.flatMap((booth) => {
      const geoCoords = createRelativePolygon(booth, buildingConfig);
      const articles = building.articles.filter((a) => booth.articleIds.includes(a.id));

      // Collect unique categories and sort by fixed priority for consistent ordering
      const CATEGORY_ORDER = ["wshu", "osztv-szktv", "szakmabemutato", "nak"];
      const categories = [
        ...new Set(articles.map((a) => getCategoryIcon(a.slug)).filter(Boolean)),
      ].sort((a, b) => CATEGORY_ORDER.indexOf(a!) - CATEGORY_ORDER.indexOf(b!)) as string[];
      if (categories.length === 0) return [];

      // Compute bounding box
      const lngs = geoCoords.map((c) => c[0]);
      const lats = geoCoords.map((c) => c[1]);
      const maxLng = Math.max(...lngs);
      const minLat = Math.min(...lats);

      // Fixed geographic offset between symbols (~2-3m at Budapest's latitude)
      const offsetStep = 0.00003;

      return categories
        .map((cat, i) => {
          const symbolName = CATEGORY_SYMBOL_MAP[cat];
          if (!symbolName) return null;

          return {
            type: "Feature" as const,
            properties: {
              symbolIcon: symbolName,
              type: "booth-symbol",
            },
            geometry: {
              type: "Point" as const,
              coordinates: [maxLng - i * offsetStep, minLat],
            },
          };
        })
        .filter((f): f is NonNullable<typeof f> => f !== null);
    });
  });

  return {
    type: "FeatureCollection" as const,
    features,
  };
};

export const generateArticlesGeoJSON = (mapData: InteractiveMapData) => {
  const features = mapData.buildings.map((building) => {
    if (!building.coordinates.length) return null;
    const buildingConfig = getBuildingConfig(building);

    return building.articles.map((article) => {
      const coordinates = createRelativePolygon(article, buildingConfig);

      return {
        type: "Feature" as const,
        properties: {
          name: article.title,
          type: "article",
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
