import fs from "fs";
import type { Data } from "./parse-map-svg";

const filePath = "g-pavilon-map-data.json";

const main = () => {
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Data;

  const updateQueries: string[] = [];
  const checkRows: string[] = [];

  for (const building of data.buildings) {
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
      updateQueries.push(
        `
UPDATE Article
SET metadata = JSON_SET(
  metadata,
  '$.map.mapId', '${building.name}',
  '$.mapId', '${building.name}',
  '$.map.x', ${article.x},
  '$.map.y', ${article.y},
  '$.map.width', ${article.width},
  '$.map.height', ${article.height}
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
  }

  // --- SINGLE CHECK QUERY ---
  const checkQuery = `
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
  `.trim();

  fs.writeFileSync("update_articles.sql", updateQueries.join("\n\n"));
  fs.writeFileSync("check_missing_articles.sql", checkQuery);

  console.log(`Generated ${updateQueries.length} UPDATE statements`);
  console.log(`Generated 1 CHECK query (missing articles)`);
};

main();
