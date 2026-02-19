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
    'coordinates', JSON_ARRAY(JSON_ARRAY(28, 549), JSON_ARRAY(207, 549), JSON_ARRAY(207, 741), JSON_ARRAY(28, 741))
  )
)
WHERE target.title = "Asztalos, Faipari technikus" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 4), JSON_ARRAY(442, 4), JSON_ARRAY(442, 182), JSON_ARRAY(243, 182))
  )
)
WHERE target.title = "Magasépítő technikus, Mélyépítő technikus" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Ács B",
  "acs-b",
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
  WHERE title = "Ács B"
    AND categoryId LIKE "szakmasztar-app-f-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Ács" AND a.slug LIKE "wshu%") OR (a.title = "Ács" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "f-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(442, 463), JSON_ARRAY(442, 711), JSON_ARRAY(336, 711), JSON_ARRAY(336, 612), JSON_ARRAY(243, 612), JSON_ARRAY(243, 528), JSON_ARRAY(273, 528), JSON_ARRAY(273, 474), JSON_ARRAY(243, 474), JSON_ARRAY(243, 463), JSON_ARRAY(442, 463))
  )
)
WHERE target.title = "Ács B" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

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
    'coordinates', JSON_ARRAY(JSON_ARRAY(442, 184), JSON_ARRAY(442, 461), JSON_ARRAY(243, 461), JSON_ARRAY(243, 184), JSON_ARRAY(442, 184))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(198, 44), JSON_ARRAY(198, 512), JSON_ARRAY(128.5, 512), JSON_ARRAY(128.5, 451), JSON_ARRAY(87.5, 451), JSON_ARRAY(87.5, 268.5), JSON_ARRAY(27, 268.5), JSON_ARRAY(27, 44), JSON_ARRAY(198, 44))
  )
)
WHERE target.title = "Épületgépészet" AND target.categoryId LIKE "szakmasztar-app-f-pavilon%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(27, 44), JSON_ARRAY(198, 44), JSON_ARRAY(198, 149), JSON_ARRAY(27, 149))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(27, 151), JSON_ARRAY(198, 151), JSON_ARRAY(198, 375), JSON_ARRAY(27, 375))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(27, 377), JSON_ARRAY(198, 377), JSON_ARRAY(198, 512), JSON_ARRAY(27, 512))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 184), JSON_ARRAY(442, 184), JSON_ARRAY(442, 289), JSON_ARRAY(243, 289))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(302, 133), JSON_ARRAY(442, 133), JSON_ARRAY(442, 182), JSON_ARRAY(302, 182))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 133), JSON_ARRAY(300, 133), JSON_ARRAY(300, 182), JSON_ARRAY(243, 182))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 83), JSON_ARRAY(442, 83), JSON_ARRAY(442, 131), JSON_ARRAY(243, 131))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 4), JSON_ARRAY(442, 4), JSON_ARRAY(442, 81), JSON_ARRAY(243, 81))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(28, 549), JSON_ARRAY(207, 549), JSON_ARRAY(207, 615), JSON_ARRAY(28, 615))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(28, 617), JSON_ARRAY(207, 617), JSON_ARRAY(207, 683), JSON_ARRAY(28, 683))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(28, 685), JSON_ARRAY(207, 685), JSON_ARRAY(207, 741), JSON_ARRAY(28, 741))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(372, 662), JSON_ARRAY(442, 662), JSON_ARRAY(442, 711), JSON_ARRAY(372, 711))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 614), JSON_ARRAY(334, 614), JSON_ARRAY(334, 711), JSON_ARRAY(243, 711))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 377), JSON_ARRAY(442, 377), JSON_ARRAY(442, 461), JSON_ARRAY(243, 461))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(295, 291), JSON_ARRAY(391, 291), JSON_ARRAY(391, 375), JSON_ARRAY(295, 375))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 291), JSON_ARRAY(293, 291), JSON_ARRAY(293, 375), JSON_ARRAY(243, 375))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(393, 291), JSON_ARRAY(442, 291), JSON_ARRAY(442, 375), JSON_ARRAY(393, 375))
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "PREFA Hungária Kft."
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'f-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(243, 476), JSON_ARRAY(271, 476), JSON_ARRAY(271, 526), JSON_ARRAY(243, 526))
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
    'coordinates', JSON_ARRAY(JSON_ARRAY(442, 463), JSON_ARRAY(442, 660), JSON_ARRAY(370, 660), JSON_ARRAY(370, 711), JSON_ARRAY(336, 711), JSON_ARRAY(336, 612), JSON_ARRAY(243, 612), JSON_ARRAY(243, 528), JSON_ARRAY(273, 528), JSON_ARRAY(273, 474.5), JSON_ARRAY(243, 474.5), JSON_ARRAY(243, 463), JSON_ARRAY(442, 463))
  ),
  '$.buildingId', 'f-pavilon'
)
WHERE title = "Ács"
  AND slug LIKE "osztvszktv%";