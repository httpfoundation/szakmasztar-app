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
    'x', 603.5,
    'y', 658,
    'width', 162,
    'height', 160
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
    'x', 426.5,
    'y', 661,
    'width', 121,
    'height', 157
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
    'x', 264.5,
    'y', 637,
    'width', 101,
    'height', 181
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
    'x', 907.5,
    'y', 372,
    'width', 240,
    'height', 210
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
    'x', 1149.5,
    'y', 372,
    'width', 151,
    'height', 179
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
    'x', 1162.5,
    'y', 639,
    'width', 161,
    'height', 150
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
    'x', 1149.5,
    'y', 213,
    'width', 137,
    'height', 90
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
    'x', 943.5,
    'y', 112,
    'width', 161,
    'height', 190
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
    'x', 1336.5,
    'y', 92,
    'width', 120,
    'height', 140
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
    'x', 1181.5,
    'y', 105,
    'width', 100,
    'height', 60
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
    'x', 714.5,
    'y', 372,
    'width', 191,
    'height', 210
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
    'x', 124.5,
    'y', 352,
    'width', 89,
    'height', 170
  )
)
WHERE target.title = "Ápolás és gondozás" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

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
  WHERE (a.title = "Autószerelő" AND a.slug LIKE "wshu%") OR (a.title = "Járműkarosszéria-előkészítő, felületbevonó" AND a.slug LIKE "osztvszktv%") OR (a.title = "Járműfényező" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Járműfényező" AND a.slug LIKE "osztvszktv%")
) agg
SET target.metadata = JSON_SET(
  COALESCE(target.metadata, JSON_OBJECT()),
  '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
  '$.map', JSON_OBJECT(
    'buildingId', "g-pavilon",
    'x', 139.5,
    'y', 92,
    'width', 226,
    'height', 99
  )
)
WHERE target.title = "Autószerelő, Járműfényező" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

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
    'x', 272.5,
    'y', 416,
    'width', 170,
    'height', 151
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
    'x', 824.5,
    'y', 112,
    'width', 85,
    'height', 190
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
    'x', 641.5,
    'y', 196,
    'width', 117,
    'height', 98
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
    'x', 641.5,
    'y', 102,
    'width', 117,
    'height', 92
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
    'x', 426.5,
    'y', 102,
    'width', 213,
    'height', 221
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
    'x', 807.5,
    'y', 655,
    'width', 292,
    'height', 134
  )
)
WHERE target.title = "Cukrász, Pék" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'x', 264.5,
    'y', 700,
    'width', 101,
    'height', 59.3333
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
    'x', 264.5,
    'y', 637,
    'width', 101,
    'height', 61
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
    'x', 272.5,
    'y', 416,
    'width', 170,
    'height', 49
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
    'x', 824.5,
    'y', 112,
    'width', 85,
    'height', 62
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
    'x', 943.5,
    'y', 112,
    'width', 52.3333,
    'height', 62
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
    'x', 997.5,
    'y', 112,
    'width', 52.3333,
    'height', 62
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
    'x', 1051.5,
    'y', 112,
    'width', 53,
    'height', 62
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
    'x', 943.5,
    'y', 176,
    'width', 161,
    'height', 62
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
    'x', 943.5,
    'y', 240,
    'width', 161,
    'height', 62
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
    'x', 1154.5,
    'y', 105,
    'width', 25,
    'height', 60
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
    'x', 1181.5,
    'y', 105,
    'width', 49,
    'height', 60
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
    'x', 1150.5,
    'y', 213,
    'width', 67,
    'height', 90
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
    'x', 1219.5,
    'y', 213,
    'width', 67,
    'height', 90
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
    'x', 1336.5,
    'y', 92,
    'width', 120,
    'height', 69
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
    'x', 1336.5,
    'y', 163,
    'width', 120,
    'height', 69
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
    'x', 1336.5,
    'y', 234,
    'width', 120,
    'height', 59
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
    'x', 1356.5,
    'y', 372,
    'width', 100,
    'height', 79
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
    'x', 1356.5,
    'y', 453,
    'width', 100,
    'height', 59
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
    'x', 490.5,
    'y', 484,
    'width', 49,
    'height', 98
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
    'x', 704.5,
    'y', 296,
    'width', 54,
    'height', 27
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
    'x', 640.5,
    'y', 102,
    'width', 118,
    'height', 45
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
    'x', 426.5,
    'y', 102,
    'width', 212,
    'height', 43
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
    'x', 426.5,
    'y', 147,
    'width', 212,
    'height', 43
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
    'x', 426.5,
    'y', 192,
    'width', 212,
    'height', 43
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
    'x', 426.5,
    'y', 237,
    'width', 212,
    'height', 43
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
    'x', 426.5,
    'y', 282,
    'width', 212,
    'height', 41
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
    'x', 640.5,
    'y', 149,
    'width', 118,
    'height', 45
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
    'x', 640.5,
    'y', 196,
    'width', 118,
    'height', 48
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
    'x', 640.5,
    'y', 246,
    'width', 118,
    'height', 48
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
    'x', 760.5,
    'y', 139,
    'width', 19,
    'height', 55
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
    'x', 760.5,
    'y', 215,
    'width', 19,
    'height', 55
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
    'x', 1404.5,
    'y', 514,
    'width', 52,
    'height', 28
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
    'x', 1150.5,
    'y', 554,
    'width', 150,
    'height', 29
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
    'x', 1232.5,
    'y', 105,
    'width', 49,
    'height', 60
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
    'x', 824.5,
    'y', 240,
    'width', 85,
    'height', 62
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
    'x', 824.5,
    'y', 176,
    'width', 85,
    'height', 62
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
    'x', 714.5,
    'y', 372,
    'width', 191,
    'height', 51
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
    'x', 714.5,
    'y', 531,
    'width', 191,
    'height', 51
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
    'x', 714.5,
    'y', 478,
    'width', 191,
    'height', 51
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
    'x', 714.5,
    'y', 425,
    'width', 191,
    'height', 51
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
    'x', 907.5,
    'y', 372,
    'width', 241,
    'height', 68.6667
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
    'x', 1150.5,
    'y', 372,
    'width', 74,
    'height', 89
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
    'x', 1226.5,
    'y', 372,
    'width', 74,
    'height', 89
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
    'x', 1150.5,
    'y', 463,
    'width', 74,
    'height', 89
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
    'x', 1226.5,
    'y', 463,
    'width', 74,
    'height', 89
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
    'x', 907.5,
    'y', 443,
    'width', 241,
    'height', 68.6667
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
    'x', 907.5,
    'y', 514,
    'width', 241,
    'height', 68.6667
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
    'x', 124.5,
    'y', 352,
    'width', 89,
    'height', 84
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
    'x', 257.5,
    'y', 263,
    'width', 79,
    'height', 50
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
    'x', 257.5,
    'y', 315,
    'width', 120,
    'height', 58
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
    'x', 139.5,
    'y', 92,
    'width', 104,
    'height', 99
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Autószerelő"
  AND slug LIKE "wshu%";

UPDATE Article
SET metadata = JSON_SET(
  COALESCE(metadata, JSON_OBJECT()),
  '$.map', JSON_OBJECT(
    'buildingId', 'g-pavilon',
    'x', 245.5,
    'y', 92,
    'width', 120,
    'height', 32
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
    'x', 245.5,
    'y', 126,
    'width', 120,
    'height', 32
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
    'x', 245.5,
    'y', 160,
    'width', 120,
    'height', 31
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
    'x', 338.5,
    'y', 263,
    'width', 39,
    'height', 50
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
    'x', 124.5,
    'y', 438,
    'width', 89,
    'height', 84
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
    'x', 124.5,
    'y', 524,
    'width', 89,
    'height', 50
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
    'x', 272.5,
    'y', 518,
    'width', 170,
    'height', 49
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
    'x', 272.5,
    'y', 467,
    'width', 170,
    'height', 49
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
    'x', 426.5,
    'y', 661,
    'width', 121,
    'height', 51.3333
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
    'x', 426.5,
    'y', 714,
    'width', 121,
    'height', 51.3333
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
    'x', 603.5,
    'y', 658,
    'width', 162,
    'height', 32
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
    'x', 807.5,
    'y', 655,
    'width', 292,
    'height', 32
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
    'x', 1162.5,
    'y', 639,
    'width', 161,
    'height', 49
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
    'x', 1162.5,
    'y', 690,
    'width', 161,
    'height', 49
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
    'x', 807.5,
    'y', 689,
    'width', 292,
    'height', 32
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
    'x', 807.5,
    'y', 723,
    'width', 292,
    'height', 32
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
    'x', 807.5,
    'y', 757,
    'width', 292,
    'height', 32
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
    'x', 603.5,
    'y', 724,
    'width', 81,
    'height', 30
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
    'x', 603.5,
    'y', 692,
    'width', 162,
    'height', 30
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
    'x', 603.5,
    'y', 756,
    'width', 162,
    'height', 30
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
    'x', 603.5,
    'y', 788,
    'width', 80,
    'height', 30
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
    'x', 685.5,
    'y', 788,
    'width', 80,
    'height', 30
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
    'x', 686.5,
    'y', 724,
    'width', 79,
    'height', 30
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
    'x', 426.5,
    'y', 767,
    'width', 121,
    'height', 51
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
    'x', 264.5,
    'y', 760,
    'width', 101,
    'height', 58
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
    'x', 123.5,
    'y', 739,
    'width', 90,
    'height', 79
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
    'x', 123.5,
    'y', 658,
    'width', 90,
    'height', 79
  ),
  '$.buildingId', 'g-pavilon'
)
WHERE title = "Víz-, gáz- és fűtésszerelő"
  AND slug LIKE "wshu%";