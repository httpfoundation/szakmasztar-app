import fs from "fs";
import type { Data, MapItem, MapItemWithoutType } from "./parse-map-svg";

const filePath = process.argv[2];

/**
 * Ray-casting point-in-polygon test.
 * Returns true if the point (px, py) lies inside the polygon defined by `polygon`.
 * Uses the standard odd-crossing-number algorithm.
 */
const isPointInPolygon = (px: number, py: number, polygon: [number, number][]): boolean => {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    const intersect = yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
};

/**
 * Checks whether two line segments (p1-p2) and (p3-p4) intersect.
 * Uses the cross-product orientation test.
 */
const segmentsIntersect = (
  p1: [number, number],
  p2: [number, number],
  p3: [number, number],
  p4: [number, number]
): boolean => {
  const cross = (o: [number, number], a: [number, number], b: [number, number]) =>
    (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);

  const d1 = cross(p3, p4, p1);
  const d2 = cross(p3, p4, p2);
  const d3 = cross(p1, p2, p3);
  const d4 = cross(p1, p2, p4);

  if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) && ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
    return true;
  }

  // Collinear / on-segment checks
  const onSegment = (p: [number, number], q: [number, number], r: [number, number]) =>
    Math.min(p[0], r[0]) <= q[0] &&
    q[0] <= Math.max(p[0], r[0]) &&
    Math.min(p[1], r[1]) <= q[1] &&
    q[1] <= Math.max(p[1], r[1]);

  if (d1 === 0 && onSegment(p3, p1, p4)) return true;
  if (d2 === 0 && onSegment(p3, p2, p4)) return true;
  if (d3 === 0 && onSegment(p1, p3, p2)) return true;
  if (d4 === 0 && onSegment(p1, p4, p2)) return true;

  return false;
};

/**
 * Checks whether two polygons have any edges that intersect.
 */
const polygonEdgesIntersect = (a: [number, number][], b: [number, number][]): boolean => {
  for (let i = 0; i < a.length; i++) {
    const a1 = a[i];
    const a2 = a[(i + 1) % a.length];
    for (let j = 0; j < b.length; j++) {
      const b1 = b[j];
      const b2 = b[(j + 1) % b.length];
      if (segmentsIntersect(a1, a2, b1, b2)) return true;
    }
  }
  return false;
};

/**
 * Checks whether two polygons overlap in any way:
 * - Any vertex of A is inside B
 * - Any vertex of B is inside A
 * - Any edge of A crosses any edge of B
 */
const doPolygonsOverlap = (a: [number, number][], b: [number, number][]): boolean => {
  // Any vertex of A inside B?
  if (a.some(([x, y]) => isPointInPolygon(x, y, b))) return true;
  // Any vertex of B inside A?
  if (b.some(([x, y]) => isPointInPolygon(x, y, a))) return true;
  // Any edge intersection?
  return polygonEdgesIntersect(a, b);
};

const getArticlesOverlappingBooth = (booth: MapItemWithoutType, allBuildingArticles: MapItem[]) => {
  if (!booth.coordinates.length) return [];

  return allBuildingArticles.filter((article) => {
    if (!article.coordinates.length) return false;
    return doPolygonsOverlap(article.coordinates, booth.coordinates);
  });
};

const createSlug = (text: string) => {
  const hungarianMap = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ö: "o",
    ő: "o",
    ú: "u",
    ü: "u",
    ű: "u",
    Á: "a",
    É: "e",
    Í: "i",
    Ó: "o",
    Ö: "o",
    Ő: "o",
    Ú: "u",
    Ü: "u",
    Ű: "u",
  } as Record<string, string>;

  return text
    .split("")
    .map((char) => hungarianMap[char] || char)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphen
    .replace(/^-+|-+$/g, "") // trim hyphens from start/end
    .replace(/-+/g, "-"); // collapse multiple hyphens
};

/** Format a coordinates array as a MySQL JSON literal, e.g. JSON_ARRAY(JSON_ARRAY(1,2), ...) */
const coordinatesToSql = (coords: [number, number][]) => {
  const inner = coords.map(([x, y]) => `JSON_ARRAY(${x}, ${y})`).join(", ");
  return `JSON_ARRAY(${inner})`;
};

const main = () => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Data;

  const updateBuildingQueries: string[] = [];
  const updateBoothQueries: string[] = [];

  for (const building of data.buildings) {
    const assignedArticleNames = new Set<string>();
    const boothArticleMap = new Map<string, MapItem[]>();

    updateBuildingQueries.push(
      `
      UPDATE Category
      SET metadata = JSON_SET(
        COALESCE(metadata, JSON_OBJECT()),
        '$.svgWidth', ${building.svgWidth},
        '$.svgHeight', ${building.svgHeight}
      )
      WHERE id = ${JSON.stringify(`szakmasztar-app-${building.name.replace("-map", "")}`)};
		`.trim()
    );

    const booths: {
      title: string;
      category: string;
      code?: number;
      coordinates: [number, number][];
      articles: MapItem[];
    }[] = [];

    for (const booth of building.booths) {
      if (!booth.coordinates.length) {
        continue;
      }

      const title = booth.name.replace(/_\d+$/, "");
      const category = `szakmasztar-app-${building.name.replace("-map", "")}`;
      const coordinates = booth.coordinates;
      const code = booth.code;

      const articles = getArticlesOverlappingBooth(booth, building.articles);

      boothArticleMap.set(title, articles);
      for (const a of articles) {
        assignedArticleNames.add(a.name);
      }

      booths.push({
        title,
        category,
        coordinates,
        code,
        articles,
      });
    }

    const unassignedArticles = building.articles.filter(
      (a) => a.coordinates.length > 0 && !assignedArticleNames.has(a.name)
    );

    for (const article of unassignedArticles) {
      const title = article.name;
      const category = `szakmasztar-app-${building.name.replace("-map", "")}`;
      const coordinates = article.coordinates;
      const articles = [article];
      const code = article.code;

      boothArticleMap.set(title, articles);

      booths.push({
        title,
        category,
        coordinates,
        code,
        articles,
      });
    }

    for (const booth of booths) {
      const title = booth.title;
      const category = booth.category;
      const coordinates = booth.coordinates;
      const articles = booth.articles;
      const code = booth.code;

      // Create the booth if not exists
      updateBoothQueries.push(
        `
      ${"INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)"}
      SELECT 
        UUID(),
        ${JSON.stringify(title)},
        ${JSON.stringify(createSlug(title))},
        ${code ? JSON.stringify(code) : "NULL"},
        '<p>.</p>',
        'szakmasztar-app-site',
        ${JSON.stringify(category)},
        NOW(),
        NOW(),
        '<p>.</p>',
        0,
        JSON_OBJECT()
      WHERE NOT EXISTS (
        SELECT 1
        FROM Article
        WHERE title = ${JSON.stringify(title)}
          AND categoryId LIKE ${JSON.stringify(category + "%")}
      );`.trim()
      );
      updateBoothQueries.push(
        `
      UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE ${articles
          .map(
            (article) =>
              `(a.title = ${JSON.stringify(article.name)} AND a.slug LIKE ${JSON.stringify(`${article.type}%`)})`
          )
          .join(" OR ")}
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', ${coordinatesToSql(coordinates)}
      )${code ? `, target.subtitle = ${JSON.stringify(code)}` : ""}
      WHERE target.title = ${JSON.stringify(title)} AND target.categoryId LIKE ${JSON.stringify(category + "%")};
      `.trim()
      );
    }

    // --- SUMMARY LOG for this building ---
    console.log(`\n=== ${building.name} ===`);

    console.log(`\nBooths (${boothArticleMap.size}):`);
    for (const [boothName, boothArticles] of boothArticleMap) {
      if (boothArticles.length === 0) {
        console.log(`  - ${boothName} — (no articles)`);
      } else {
        console.log(`  - ${boothName} — ${boothArticles.length} article(s):`);
        for (const article of boothArticles) {
          console.log(`      • ${article.name} (${article.type})`);
        }
      }
    }

    if (unassignedArticles.length > 0) {
      console.log(`\n  Articles NOT inside any booth (${unassignedArticles.length}):`);
      for (const a of unassignedArticles) {
        console.log(`      • ${a.name} (${a.type})`);
      }
    } else {
      console.log(`\n All articles are inside a booth.`);
    }
  }

  fs.writeFileSync(
    filePath.replace(".json", "-updates.sql"),
    [...updateBuildingQueries, ...updateBoothQueries].join("\n\n")
  );

  console.log(`\nGenerated ${updateBuildingQueries.length} UPDATE statements (buildings)`);
  console.log(`Generated ${updateBoothQueries.length} UPDATE statements (booths)`);
};

main();
