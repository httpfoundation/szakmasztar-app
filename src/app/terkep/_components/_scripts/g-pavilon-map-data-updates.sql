UPDATE Category
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.svgWidth', 1583,
  '$.svgHeight', 834
)
WHERE id = "szakmasztar-app-g-pavilon";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Mechatronika, Automatikai Technikus, Ipar 4.0",
  "mechatronika-automatikai-technikus-ipar-4-0",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Mechatronika, Automatikai Technikus, Ipar 4.0"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Automatikai technikus, Mechatronikai technikus, Ipar 4.0" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Automatikai technikus - Autóipar szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Mechatronikai technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Mechatronika" AND a.slug LIKE "wshu%") OR (a.title = "Ipar 4.0" AND a.slug LIKE "osztvszktv%") OR (a.title = "Ipar 4.0" AND a.slug LIKE "wshu%") OR (a.title = "Automatikai technikus - Gyártástechnika szakmairány" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 658), JSON_ARRAY(765.5, 658), JSON_ARRAY(765.5, 818), JSON_ARRAY(603.5, 818))
  )
)
WHERE target.title = "Mechatronika, Automatikai Technikus, Ipar 4.0" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Informatikai rendszerüzemeltető, Szoftverfejlesztő, Webfejlesztő",
  "informatikai-rendszeruzemelteto-szoftverfejleszto-webfejleszto",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Informatikai rendszerüzemeltető, Szoftverfejlesztő, Webfejlesztő"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Informatikai rendszerüzemeltető" AND a.slug LIKE "wshu%") OR (a.title = "Szoftverfejlesztő" AND a.slug LIKE "wshu%") OR (a.title = "Webfejlesztő" AND a.slug LIKE "wshu%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 661), JSON_ARRAY(547.5, 661), JSON_ARRAY(547.5, 818), JSON_ARRAY(426.5, 818))
  )
)
WHERE target.title = "Informatikai rendszerüzemeltető, Szoftverfejlesztő, Webfejlesztő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Nyomdaipar",
  "nyomdaipar",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Nyomdaipar"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Nyomdaipari technikus - Nyomdaipari előkészítő szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Nyomdaipar" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Nyomdaipari technikus - Nyomdaipari gépmester szakmairány" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(264.5, 637), JSON_ARRAY(365.5, 637), JSON_ARRAY(365.5, 818), JSON_ARRAY(264.5, 818))
  )
)
WHERE target.title = "Nyomdaipar" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Szakács",
  "szakacs",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Szakács"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Szakács" AND a.slug LIKE "wshu%") OR (a.title = "Szakács" AND a.slug LIKE "osztvszktv%") OR (a.title = "Szakács szaktechnikus" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(907.5, 372), JSON_ARRAY(1147.5, 372), JSON_ARRAY(1147.5, 582), JSON_ARRAY(907.5, 582))
  )
)
WHERE target.title = "Szakács" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Kereskedelmi értékesítő, Kereskedő és webáruházi technikus",
  "kereskedelmi-ertekesito-kereskedo-es-webaruhazi-technikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Kereskedelmi értékesítő, Kereskedő és webáruházi technikus"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Kereskedelmi értékesítő" AND a.slug LIKE "osztvszktv%") OR (a.title = "Kereskedelmi értékesítő" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Kereskedő és webáruházi technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Kereskedő és webáruházi technikus" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(1149.5, 372), JSON_ARRAY(1300.5, 372), JSON_ARRAY(1300.5, 551), JSON_ARRAY(1149.5, 551))
  )
)
WHERE target.title = "Kereskedelmi értékesítő, Kereskedő és webáruházi technikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Festő",
  "festo",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Festő"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Festő, mázoló, tapétázó" AND a.slug LIKE "osztvszktv%") OR (a.title = "Festő, díszítőfestő" AND a.slug LIKE "wshu%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(1162.5, 639), JSON_ARRAY(1323.5, 639), JSON_ARRAY(1323.5, 789), JSON_ARRAY(1162.5, 789))
  )
)
WHERE target.title = "Festő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Divatszabó",
  "divatszabo",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Divatszabó"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Divatszabó - Női szabó szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Divatszabó" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(1149.5, 213), JSON_ARRAY(1286.5, 213), JSON_ARRAY(1286.5, 303), JSON_ARRAY(1149.5, 303))
  )
)
WHERE target.title = "Divatszabó" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Villanyszerelő, Erősáramú elektrotechnikus, Elektronikai technikus",
  "villanyszerelo-erosaramu-elektrotechnikus-elektronikai-technikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Villanyszerelő, Erősáramú elektrotechnikus, Elektronikai technikus"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Villanyszerelő - Épületvillamossági szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Villanyszerelő - Villamos hálózat szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Villanyszerelő - Villamos készülék és berendezés szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Erősáramú elektrotechnikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Elektronikai technikus" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(943.5, 112), JSON_ARRAY(1104.5, 112), JSON_ARRAY(1104.5, 302), JSON_ARRAY(943.5, 302))
  )
)
WHERE target.title = "Villanyszerelő, Erősáramú elektrotechnikus, Elektronikai technikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Bútorasztalos, Épületasztalos",
  "butorasztalos-epuletasztalos",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Bútorasztalos, Épületasztalos"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Bútorasztalos" AND a.slug LIKE "wshu%") OR (a.title = "Épületasztalos" AND a.slug LIKE "wshu%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(1336.5, 92), JSON_ARRAY(1456.5, 92), JSON_ARRAY(1456.5, 232), JSON_ARRAY(1336.5, 232))
  )
)
WHERE target.title = "Bútorasztalos, Épületasztalos" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Kertépítő",
  "kertepito",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Kertépítő"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Kertépítő" AND a.slug LIKE "wshu%") OR (a.title = "Kertépítő" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(1181.5, 105), JSON_ARRAY(1281.5, 105), JSON_ARRAY(1281.5, 165), JSON_ARRAY(1181.5, 165))
  )
)
WHERE target.title = "Kertépítő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Pincér, Vendégtéri szaktechnikus",
  "pincer-vendegteri-szaktechnikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Pincér, Vendégtéri szaktechnikus"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Pincér - vendégtéri szakember" AND a.slug LIKE "osztvszktv%") OR (a.title = "Vendéglátás" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Pincér" AND a.slug LIKE "wshu%") OR (a.title = "Vendégtéri szaktechnikus" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(714.5, 372), JSON_ARRAY(905.5, 372), JSON_ARRAY(905.5, 582), JSON_ARRAY(714.5, 582))
  )
)
WHERE target.title = "Pincér, Vendégtéri szaktechnikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Ápolás és gondozás",
  "apolas-es-gondozas",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Ápolás és gondozás"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Ápolás és gondozás" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Ápolás és gondozás" AND a.slug LIKE "wshu%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(124.5, 352), JSON_ARRAY(213.5, 352), JSON_ARRAY(213.5, 522), JSON_ARRAY(124.5, 522))
  )
)
WHERE target.title = "Ápolás és gondozás" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Kozmetikus, Szépségápoló",
  "kozmetikus-szepsegapolo",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Kozmetikus, Szépségápoló"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Kozmetikus" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Szépségápoló" AND a.slug LIKE "wshu%") OR (a.title = "Kozmetikus technikus" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(272.5, 416), JSON_ARRAY(442.5, 416), JSON_ARRAY(442.5, 567), JSON_ARRAY(272.5, 567))
  )
)
WHERE target.title = "Kozmetikus, Szépségápoló" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Fodrász",
  "fodrasz",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Fodrász"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Fodrász" AND a.slug LIKE "wshu%") OR (a.title = "Fodrász" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Fodrász" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(824.5, 112), JSON_ARRAY(909.5, 112), JSON_ARRAY(909.5, 302), JSON_ARRAY(824.5, 302))
  )
)
WHERE target.title = "Fodrász" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Vegyész technikus",
  "vegyesz-technikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Vegyész technikus"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Vegyész technikus - Általános laboráns szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Vegyész technikus - Termelési folyamatirányító szakmairány" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(641.5, 196), JSON_ARRAY(758.5, 196), JSON_ARRAY(758.5, 294), JSON_ARRAY(641.5, 294))
  )
)
WHERE target.title = "Vegyész technikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Gépésztechnikus",
  "gepesztechnikus",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Gépésztechnikus"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Gépésztechnikus - CAD-CAM szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Gépésztechnikus - CAD-CAM szakmairány" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(641.5, 102), JSON_ARRAY(758.5, 102), JSON_ARRAY(758.5, 194), JSON_ARRAY(641.5, 194))
  )
)
WHERE target.title = "Gépésztechnikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Jármű- és szerviztechnika",
  "jarmu-es-szerviztechnika",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Jármű- és szerviztechnika"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Alternatív járműhajtási technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Karosszérialakatos" AND a.slug LIKE "osztvszktv%") OR (a.title = "Gépjármű-mechatronikai technikus - Gyártás szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Gépjármű-mechatronikai technikus - Szerviz szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Jármű- és szerviztechnika" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 102), JSON_ARRAY(639.5, 102), JSON_ARRAY(639.5, 323), JSON_ARRAY(426.5, 323))
  )
)
WHERE target.title = "Jármű- és szerviztechnika" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Cukrász, Pék",
  "cukrasz-pek",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Cukrász, Pék"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Cukrász" AND a.slug LIKE "osztvszktv%") OR (a.title = "Cukrász szaktechnikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Pék" AND a.slug LIKE "wshu%") OR (a.title = "Cukrász, Cukrász szaktechnikus" AND a.slug LIKE "interaktiv-szakmabemutato%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(807.5, 655), JSON_ARRAY(1099.5, 655), JSON_ARRAY(1099.5, 789), JSON_ARRAY(807.5, 789))
  )
)
WHERE target.title = "Cukrász, Pék" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
SELECT 
  UUID(),
  "Autószerelő, Járműfényező",
  "autoszerelo-jarmufenyezo",
  '<p>.</p>',
  'szakmasztar-app-site',
  "szakmasztar-app-g-pavilon",
  NOW(),
  NOW(),
  '<p>.</p>',
  0,
  JSON_OBJECT()
WHERE NOT EXISTS (
  SELECT 1
  FROM Article
  WHERE title = "Autószerelő, Járműfényező"
    AND categoryId LIKE "szakmasztar-app-g-pavilon%"
);

UPDATE Article target
JOIN (
  SELECT JSON_ARRAYAGG(a.id) AS article_ids
  FROM Article a
  WHERE (a.title = "Járműkarosszéria-előkészítő, felületbevonó" AND a.slug LIKE "osztvszktv%") OR (a.title = "Járműfényező" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Járműfényező" AND a.slug LIKE "osztvszktv%") OR (a.title = "Autószerelő" AND a.slug LIKE "wshu%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'coordinates', JSON_ARRAY(JSON_ARRAY(365.5, 92), JSON_ARRAY(365.5, 191), JSON_ARRAY(183.409, 191), JSON_ARRAY(153.701, 161.787), JSON_ARRAY(153.409, 161.5), JSON_ARRAY(139.414, 161.5), JSON_ARRAY(124.5, 146.586), JSON_ARRAY(124.5, 92), JSON_ARRAY(365.5, 92))
  )
)
WHERE target.title = "Autószerelő, Járműfényező" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(264.5, 700), JSON_ARRAY(365.5, 700), JSON_ARRAY(365.5, 759.3333), JSON_ARRAY(264.5, 759.3333))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Nyomdaipari technikus - Nyomdaipari előkészítő szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(264.5, 637), JSON_ARRAY(365.5, 637), JSON_ARRAY(365.5, 698), JSON_ARRAY(264.5, 698))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Nyomdaipar"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(272.5, 416), JSON_ARRAY(442.5, 416), JSON_ARRAY(442.5, 465), JSON_ARRAY(272.5, 465))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kozmetikus"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(824.5, 112), JSON_ARRAY(909.5, 112), JSON_ARRAY(909.5, 174), JSON_ARRAY(824.5, 174))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Fodrász"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(943.5, 112), JSON_ARRAY(995.8333, 112), JSON_ARRAY(995.8333, 174), JSON_ARRAY(943.5, 174))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Villanyszerelő - Épületvillamossági szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(997.5, 112), JSON_ARRAY(1049.8333, 112), JSON_ARRAY(1049.8333, 174), JSON_ARRAY(997.5, 174))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Villanyszerelő - Villamos hálózat szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1051.5, 112), JSON_ARRAY(1104.5, 112), JSON_ARRAY(1104.5, 174), JSON_ARRAY(1051.5, 174))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Villanyszerelő - Villamos készülék és berendezés szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(943.5, 176), JSON_ARRAY(1104.5, 176), JSON_ARRAY(1104.5, 238), JSON_ARRAY(943.5, 238))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Erősáramú elektrotechnikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(943.5, 240), JSON_ARRAY(1104.5, 240), JSON_ARRAY(1104.5, 302), JSON_ARRAY(943.5, 302))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Elektronikai technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1154.5, 105), JSON_ARRAY(1179.5, 105), JSON_ARRAY(1179.5, 165), JSON_ARRAY(1154.5, 165))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Virágkötő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1181.5, 105), JSON_ARRAY(1230.5, 105), JSON_ARRAY(1230.5, 165), JSON_ARRAY(1181.5, 165))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kertépítő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1150.5, 213), JSON_ARRAY(1217.5, 213), JSON_ARRAY(1217.5, 303), JSON_ARRAY(1150.5, 303))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Divatszabó - Női szabó szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1219.5, 213), JSON_ARRAY(1286.5, 213), JSON_ARRAY(1286.5, 303), JSON_ARRAY(1219.5, 303))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Divatszabó"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1336.5, 92), JSON_ARRAY(1456.5, 92), JSON_ARRAY(1456.5, 161), JSON_ARRAY(1336.5, 161))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Bútorasztalos"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1336.5, 163), JSON_ARRAY(1456.5, 163), JSON_ARRAY(1456.5, 232), JSON_ARRAY(1336.5, 232))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Épületasztalos"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1336.5, 234), JSON_ARRAY(1456.5, 234), JSON_ARRAY(1456.5, 293), JSON_ARRAY(1336.5, 293))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Villanyszerelő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1356.5, 372), JSON_ARRAY(1456.5, 372), JSON_ARRAY(1456.5, 451), JSON_ARRAY(1356.5, 451))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "HM Kadét"
  AND slug LIKE "egyeb-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1356.5, 453), JSON_ARRAY(1456.5, 453), JSON_ARRAY(1456.5, 512), JSON_ARRAY(1356.5, 512))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "MOL"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(490.5, 484), JSON_ARRAY(539.5, 484), JSON_ARRAY(539.5, 582), JSON_ARRAY(490.5, 582))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "MOL_2"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(704.5, 296), JSON_ARRAY(758.5, 296), JSON_ARRAY(758.5, 323), JSON_ARRAY(704.5, 323))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Richter Gedeon Nyrt."
  AND slug LIKE "egyeb-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(640.5, 102), JSON_ARRAY(758.5, 102), JSON_ARRAY(758.5, 147), JSON_ARRAY(640.5, 147))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Gépésztechnikus - CAD-CAM szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 102), JSON_ARRAY(638.5, 102), JSON_ARRAY(638.5, 145), JSON_ARRAY(426.5, 145))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Alternatív járműhajtási technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 147), JSON_ARRAY(638.5, 147), JSON_ARRAY(638.5, 190), JSON_ARRAY(426.5, 190))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Karosszérialakatos"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 192), JSON_ARRAY(638.5, 192), JSON_ARRAY(638.5, 235), JSON_ARRAY(426.5, 235))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Gépjármű-mechatronikai technikus - Gyártás szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 237), JSON_ARRAY(638.5, 237), JSON_ARRAY(638.5, 280), JSON_ARRAY(426.5, 280))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Gépjármű-mechatronikai technikus - Szerviz szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 282), JSON_ARRAY(638.5, 282), JSON_ARRAY(638.5, 323), JSON_ARRAY(426.5, 323))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Jármű- és szerviztechnika"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(640.5, 149), JSON_ARRAY(758.5, 149), JSON_ARRAY(758.5, 194), JSON_ARRAY(640.5, 194))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Gépésztechnikus - CAD-CAM szakmairány"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(640.5, 196), JSON_ARRAY(758.5, 196), JSON_ARRAY(758.5, 244), JSON_ARRAY(640.5, 244))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Vegyész technikus - Általános laboráns szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(640.5, 246), JSON_ARRAY(758.5, 246), JSON_ARRAY(758.5, 294), JSON_ARRAY(640.5, 294))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Vegyész technikus - Termelési folyamatirányító szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(760.5, 139), JSON_ARRAY(779.5, 139), JSON_ARRAY(779.5, 194), JSON_ARRAY(760.5, 194))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Magyar Kémikusok Egyesülete"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(760.5, 215), JSON_ARRAY(779.5, 215), JSON_ARRAY(779.5, 270), JSON_ARRAY(760.5, 270))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Bálint Analitika"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1404.5, 514), JSON_ARRAY(1456.5, 514), JSON_ARRAY(1456.5, 542), JSON_ARRAY(1404.5, 542))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "IKK"
  AND slug LIKE "egyeb-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1150.5, 554), JSON_ARRAY(1300.5, 554), JSON_ARRAY(1300.5, 583), JSON_ARRAY(1150.5, 583))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "MÁV"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1232.5, 105), JSON_ARRAY(1281.5, 105), JSON_ARRAY(1281.5, 165), JSON_ARRAY(1232.5, 165))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kertépítő"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(824.5, 240), JSON_ARRAY(909.5, 240), JSON_ARRAY(909.5, 302), JSON_ARRAY(824.5, 302))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Fodrász"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(824.5, 176), JSON_ARRAY(909.5, 176), JSON_ARRAY(909.5, 238), JSON_ARRAY(824.5, 238))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Fodrász"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(714.5, 372), JSON_ARRAY(905.5, 372), JSON_ARRAY(905.5, 423), JSON_ARRAY(714.5, 423))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Pincér - vendégtéri szakember"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(714.5, 531), JSON_ARRAY(905.5, 531), JSON_ARRAY(905.5, 582), JSON_ARRAY(714.5, 582))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Vendéglátás"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(714.5, 478), JSON_ARRAY(905.5, 478), JSON_ARRAY(905.5, 529), JSON_ARRAY(714.5, 529))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Pincér"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(714.5, 425), JSON_ARRAY(905.5, 425), JSON_ARRAY(905.5, 476), JSON_ARRAY(714.5, 476))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Vendégtéri szaktechnikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(907.5, 372), JSON_ARRAY(1148.5, 372), JSON_ARRAY(1148.5, 440.6667), JSON_ARRAY(907.5, 440.6667))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Szakács"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1150.5, 372), JSON_ARRAY(1224.5, 372), JSON_ARRAY(1224.5, 461), JSON_ARRAY(1150.5, 461))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kereskedelmi értékesítő"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1226.5, 372), JSON_ARRAY(1300.5, 372), JSON_ARRAY(1300.5, 461), JSON_ARRAY(1226.5, 461))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kereskedelmi értékesítő"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1150.5, 463), JSON_ARRAY(1224.5, 463), JSON_ARRAY(1224.5, 552), JSON_ARRAY(1150.5, 552))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kereskedő és webáruházi technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1226.5, 463), JSON_ARRAY(1300.5, 463), JSON_ARRAY(1300.5, 552), JSON_ARRAY(1226.5, 552))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kereskedő és webáruházi technikus"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(907.5, 443), JSON_ARRAY(1148.5, 443), JSON_ARRAY(1148.5, 511.6667), JSON_ARRAY(907.5, 511.6667))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Szakács"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(907.5, 514), JSON_ARRAY(1148.5, 514), JSON_ARRAY(1148.5, 582.6667), JSON_ARRAY(907.5, 582.6667))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Szakács szaktechnikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(124.5, 352), JSON_ARRAY(213.5, 352), JSON_ARRAY(213.5, 436), JSON_ARRAY(124.5, 436))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Ápolás és gondozás"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(257.5, 263), JSON_ARRAY(336.5, 263), JSON_ARRAY(336.5, 313), JSON_ARRAY(257.5, 313))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Grafikus"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(257.5, 315), JSON_ARRAY(377.5, 315), JSON_ARRAY(377.5, 373), JSON_ARRAY(257.5, 373))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Ipari robotika"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(245.5, 92), JSON_ARRAY(365.5, 92), JSON_ARRAY(365.5, 124), JSON_ARRAY(245.5, 124))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Járműkarosszéria-előkészítő, felületbevonó"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(245.5, 126), JSON_ARRAY(365.5, 126), JSON_ARRAY(365.5, 158), JSON_ARRAY(245.5, 158))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Járműfényező"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(245.5, 160), JSON_ARRAY(365.5, 160), JSON_ARRAY(365.5, 191), JSON_ARRAY(245.5, 191))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Járműfényező"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(338.5, 263), JSON_ARRAY(377.5, 263), JSON_ARRAY(377.5, 313), JSON_ARRAY(338.5, 313))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "CNC maró"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(124.5, 438), JSON_ARRAY(213.5, 438), JSON_ARRAY(213.5, 522), JSON_ARRAY(124.5, 522))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Ápolás és gondozás"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(124.5, 524), JSON_ARRAY(213.5, 524), JSON_ARRAY(213.5, 574), JSON_ARRAY(124.5, 574))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "MESZK"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(272.5, 518), JSON_ARRAY(442.5, 518), JSON_ARRAY(442.5, 567), JSON_ARRAY(272.5, 567))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Szépségápoló"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(272.5, 467), JSON_ARRAY(442.5, 467), JSON_ARRAY(442.5, 516), JSON_ARRAY(272.5, 516))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Kozmetikus technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 661), JSON_ARRAY(547.5, 661), JSON_ARRAY(547.5, 712.3333), JSON_ARRAY(426.5, 712.3333))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Informatikai rendszerüzemeltető"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 714), JSON_ARRAY(547.5, 714), JSON_ARRAY(547.5, 765.3333), JSON_ARRAY(426.5, 765.3333))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Szoftverfejlesztő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 658), JSON_ARRAY(765.5, 658), JSON_ARRAY(765.5, 690), JSON_ARRAY(603.5, 690))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Automatikai technikus, Mechatronikai technikus, Ipar 4.0"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(807.5, 655), JSON_ARRAY(1099.5, 655), JSON_ARRAY(1099.5, 687), JSON_ARRAY(807.5, 687))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Cukrász"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1162.5, 639), JSON_ARRAY(1323.5, 639), JSON_ARRAY(1323.5, 688), JSON_ARRAY(1162.5, 688))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Festő, mázoló, tapétázó"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(1162.5, 690), JSON_ARRAY(1323.5, 690), JSON_ARRAY(1323.5, 739), JSON_ARRAY(1162.5, 739))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Festő, díszítőfestő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(807.5, 689), JSON_ARRAY(1099.5, 689), JSON_ARRAY(1099.5, 721), JSON_ARRAY(807.5, 721))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Cukrász szaktechnikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(807.5, 723), JSON_ARRAY(1099.5, 723), JSON_ARRAY(1099.5, 755), JSON_ARRAY(807.5, 755))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Pék"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(807.5, 757), JSON_ARRAY(1099.5, 757), JSON_ARRAY(1099.5, 789), JSON_ARRAY(807.5, 789))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Cukrász, Cukrász szaktechnikus"
  AND slug LIKE "interaktiv-szakmabemutato%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 724), JSON_ARRAY(684.5, 724), JSON_ARRAY(684.5, 754), JSON_ARRAY(603.5, 754))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Automatikai technikus - Autóipar szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 692), JSON_ARRAY(765.5, 692), JSON_ARRAY(765.5, 722), JSON_ARRAY(603.5, 722))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Mechatronikai technikus"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 756), JSON_ARRAY(765.5, 756), JSON_ARRAY(765.5, 786), JSON_ARRAY(603.5, 786))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Mechatronika"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 788), JSON_ARRAY(683.5, 788), JSON_ARRAY(683.5, 818), JSON_ARRAY(603.5, 818))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Ipar 4.0"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(685.5, 788), JSON_ARRAY(765.5, 788), JSON_ARRAY(765.5, 818), JSON_ARRAY(685.5, 818))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Ipar 4.0"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(686.5, 724), JSON_ARRAY(765.5, 724), JSON_ARRAY(765.5, 754), JSON_ARRAY(686.5, 754))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Automatikai technikus - Gyártástechnika szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 767), JSON_ARRAY(547.5, 767), JSON_ARRAY(547.5, 818), JSON_ARRAY(426.5, 818))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Webfejlesztő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(264.5, 760), JSON_ARRAY(365.5, 760), JSON_ARRAY(365.5, 818), JSON_ARRAY(264.5, 818))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Nyomdaipari technikus - Nyomdaipari gépmester szakmairány"
  AND slug LIKE "osztvszktv%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(123.5, 739), JSON_ARRAY(213.5, 739), JSON_ARRAY(213.5, 818), JSON_ARRAY(123.5, 818))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Hűtő- és klímatechnikai szerelő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(123.5, 658), JSON_ARRAY(213.5, 658), JSON_ARRAY(213.5, 737), JSON_ARRAY(123.5, 737))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Víz-, gáz- és fűtésszerelő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'coordinates', JSON_ARRAY(JSON_ARRAY(243.5, 92), JSON_ARRAY(243.5, 191), JSON_ARRAY(182.409, 191), JSON_ARRAY(152.701, 161.787), JSON_ARRAY(152.409, 161.5), JSON_ARRAY(138.896, 161.5), JSON_ARRAY(124, 147.565), JSON_ARRAY(124, 92), JSON_ARRAY(243.5, 92))
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Autószerelő"
  AND slug LIKE "wshu%";