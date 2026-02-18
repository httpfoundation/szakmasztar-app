import fs from "fs";
import type { Data } from "./parse-map-svg";

const filePath = process.argv[2];

const getArticlesOverlappingBooth = (
  booth: Data["buildings"][number]["booths"][number],
  allBuildingArticles: Data["buildings"][number]["articles"][number][]
) => {
  return allBuildingArticles.filter((article) => {
    if (article.x == null || article.y == null || article.width == null || article.height == null) {
      return false;
    }

    return (
      article.x < booth.x + booth.width &&
      article.x + article.width > booth.x &&
      article.y < booth.y + booth.height &&
      article.y + article.height > booth.y
    );
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

const main = () => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Data;

  const updateBuildingQueries: string[] = [];
  const updateArticleQueries: string[] = [];
  const updateBoothQueries: string[] = [];
  const checkRows: string[] = [];

  for (const building of data.buildings) {
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

    for (const article of building.articles) {
      if (
        article.x == null ||
        article.y == null ||
        article.width == null ||
        article.height == null
      ) {
        continue;
      }

      const title = JSON.stringify(article.name);
      const slugLike = JSON.stringify(`${article.type}%`);

      // --- UPDATE QUERY ---
      updateArticleQueries.push(
        `
UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', '${building.name.replace("-map", "")}',
    'x', ${article.x},
    'y', ${article.y},
    'width', ${article.width},
    'height', ${article.height}
  ),
  '$.buildingId', '${building.name.replace("-map", "")}'
)
WHERE title = ${title}
  AND slug LIKE ${slugLike};
      `.trim()
      );

      // --- CHECK ROW (for UNION table) ---
      checkRows.push(
        `
SELECT ${title} AS title, ${slugLike} AS slugLike
      `.trim()
      );
    }

    /* CREATE BOOTHS */

    for (const booth of building.booths) {
      if (booth.x == null || booth.y == null || booth.width == null || booth.height == null) {
        continue;
      }

      // title might have _1, _2, etc. at the end
      const title = JSON.stringify(booth.name.replace(/_\d+$/, ""));
      const categoryLike = JSON.stringify(`szakmasztar-app-${building.name.replace("-map", "")}%`);

      const overlappingArticles = getArticlesOverlappingBooth(booth, building.articles);

      updateBoothQueries.push(
        `
${"INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)"}
SELECT 
  UUID(),
  ${title},
  ${JSON.stringify(createSlug(booth.name.replace(/_\d+$/, "")))},
  '<p>.</p>',
  'szakmasztar-app-site',
  ${categoryLike.replace("%", "")},
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = ${title}
    AND categoryId LIKE ${categoryLike}
);`.trim()
      );

      // --- UPDATE QUERY ---
      updateBoothQueries.push(
        `
UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE ${overlappingArticles
    .map(
      (article) =>
        `(a.title = ${JSON.stringify(article.name)} AND a.slug LIKE ${JSON.stringify(`${article.type}%`)})`
    )
    .join(" OR ")}
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', ${JSON.stringify(building.name.replace("-map", ""))},
    'x', ${booth.x},
    'y', ${booth.y},
    'width', ${booth.width},
    'height', ${booth.height}
  )
)
WHERE target.title = ${title} AND target.categoryId LIKE ${categoryLike};
`.trim()
      );
    }
  }

  // --- SINGLE CHECK QUERY ---
  /* const checkQuery = `
SELECT
  c.title,
  c.slugLike
FROM (
${checkRows.join("\nUNION ALL\n")}
) c
LEFT JOIN Article a
  ON a.title = c.title
 AND a.slug LIKE c.slugLike
WHERE a.id IS NULL;
  `.trim(); */

  // fs.writeFileSync("update_buildings.sql", updateBuildingQueries.join("\n\n"));
  // fs.writeFileSync("update_articles.sql", updateArticleQueries.join("\n\n"));
  // fs.writeFileSync("update_booths.sql", updateBoothQueries.join("\n\n"));
  // fs.writeFileSync("check_missing_articles.sql", checkQuery);

  fs.writeFileSync(
    filePath.replace(".json", "-updates.sql"),
    [...updateBuildingQueries, ...updateBoothQueries, ...updateArticleQueries].join("\n\n")
  );

  console.log(`Generated ${updateArticleQueries.length} UPDATE statements`);
  console.log(`Generated ${updateBoothQueries.length} UPDATE statements`);
  console.log(`Generated 1 CHECK query (missing articles)`);
};

main();
