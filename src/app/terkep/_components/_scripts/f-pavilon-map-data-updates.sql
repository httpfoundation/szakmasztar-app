UPDATE Category
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.svgWidth', 482,
  '$.svgHeight', 746
)
WHERE id = "szakmasztar-app-f-pavilon";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Asztalos, Faipari technikus",
  "asztalos-faipari-technikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-f-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Asztalos, Faipari technikus"
    AND categoryId LIKE "szakmasztar-app-f-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Asztalos" AND a.slug LIKE "osztvszktv%") OR (a.title = "Faipari technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Faipar" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "f-pavilon",
    'x', 28,
    'y', 549,
    'width', 179,
    'height', 192
  )
)
WHERE target.title = "Asztalos, Faipari technikus" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Ács",
  "acs",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-f-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Ács"
    AND categoryId LIKE "szakmasztar-app-f-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Ács" AND a.slug LIKE "wshu%") OR (a.title = "TEGY Tető" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Ács" AND a.slug LIKE "osztvszktv%") OR (a.title = "Terrán" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "f-pavilon",
    'x', 243,
    'y', 464,
    'width', 199,
    'height', 247
  )
)
WHERE target.title = "Ács" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Kőműves, Burkoló, Bádogos",
  "komuves-burkolo-badogos",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-f-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Kőműves, Burkoló, Bádogos"
    AND categoryId LIKE "szakmasztar-app-f-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Kőműves" AND a.slug LIKE "osztvszktv%") OR (a.title = "Bádogos" AND a.slug LIKE "osztvszktv%") OR (a.title = "Burkoló" AND a.slug LIKE "osztvszktv%") OR (a.title = "Knauf" AND a.slug LIKE "osztvszktv%") OR (a.title = "PREFA Hungária Kft." AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "f-pavilon",
    'x', 243,
    'y', 184,
    'width', 199,
    'height', 278
  )
)
WHERE target.title = "Kőműves, Burkoló, Bádogos" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Épületgépészet",
  "epuletgepeszet",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-f-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Épületgépészet"
    AND categoryId LIKE "szakmasztar-app-f-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Épületgépész technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Épületgépészet" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Központifűtés- és gázhálózatrendszer-szerelő" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "f-pavilon",
    'x', 27,
    'y', 44,
    'width', 171,
    'height', 468
  )
)
WHERE target.title = "Épületgépészet" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Magasépítő technikus, Mélyépítő technikus",
  "magasepito-technikus-melyepito-technikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-f-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Magasépítő technikus, Mélyépítő technikus"
    AND categoryId LIKE "szakmasztar-app-f-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Mélyépítő technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "STRABAG" AND a.slug LIKE "osztvszktv%") OR (a.title = "Magasépítő technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Magasépítő/mélyépítő technikus" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "f-pavilon",
    'x', 243,
    'y', 4,
    'width', 199,
    'height', 178
  )
)
WHERE target.title = "Magasépítő technikus, Mélyépítő technikus" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 27,
    'y', 44,
    'width', 171,
    'height', 105
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Épületgépész technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 27,
    'y', 151,
    'width', 171,
    'height', 224
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Épületgépészet"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 27,
    'y', 377,
    'width', 171,
    'height', 135
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Központifűtés- és gázhálózatrendszer-szerelő"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 184,
    'width', 199,
    'height', 105
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Kőműves"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 302,
    'y', 133,
    'width', 140,
    'height', 49
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Mélyépítő technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 133,
    'width', 57,
    'height', 49
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "STRABAG"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 83,
    'width', 199,
    'height', 48
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Magasépítő technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 4,
    'width', 199,
    'height', 77
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Magasépítő/mélyépítő technikus"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 28,
    'y', 549,
    'width', 179,
    'height', 66
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Asztalos"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 28,
    'y', 617,
    'width', 179,
    'height', 66
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Faipari technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 28,
    'y', 685,
    'width', 179,
    'height', 56
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Faipar"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 336,
    'y', 662,
    'width', 106,
    'height', 49
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Ács"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 662,
    'width', 91,
    'height', 49
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "TEGY Tető"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 526,
    'width', 199,
    'height', 134
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Ács"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 463,
    'width', 199,
    'height', 61
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Terrán"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 377,
    'width', 199,
    'height', 84
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Bádogos"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 295,
    'y', 291,
    'width', 96,
    'height', 84
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Burkoló"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 243,
    'y', 291,
    'width', 50,
    'height', 84
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Knauf"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'x', 393,
    'y', 291,
    'width', 49,
    'height', 84
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "PREFA Hungária Kft."
  AND slug LIKE "osztvszktv%";