UPDATE Category
      SET metadata = JSON_SET(
        COALESCE(metadata, JSON_OBJECT()),
        '$.svgWidth', 1583,
        '$.svgHeight', 834
      )
      WHERE id = "szakmasztar-app-g-pavilon";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Ápolás és gondozás",
        "apolas-es-gondozas",
        4,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(124.5, 352), JSON_ARRAY(213.5, 352), JSON_ARRAY(213.5, 522), JSON_ARRAY(124.5, 522))
      ), target.subtitle = 4
      WHERE target.title = "Ápolás és gondozás" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Autószerelő, Járműfényező",
        "autoszerelo-jarmufenyezo",
        8,
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
        WHERE (a.title = "Autószerelő" AND a.slug LIKE "wshu%") OR (a.title = "Járműfényező" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Járműfényező" AND a.slug LIKE "osztvszktv%") OR (a.title = "Járműkarosszéria-előkészítő, felületbevonó" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(365.5, 92), JSON_ARRAY(365.5, 191), JSON_ARRAY(183.409, 191), JSON_ARRAY(153.701, 161.787), JSON_ARRAY(153.409, 161.5), JSON_ARRAY(139.414, 161.5), JSON_ARRAY(124.5, 146.586), JSON_ARRAY(124.5, 92), JSON_ARRAY(365.5, 92))
      ), target.subtitle = 8
      WHERE target.title = "Autószerelő, Járműfényező" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Bútorasztalos, Épületasztalos",
        "butorasztalos-epuletasztalos",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1336.5, 92), JSON_ARRAY(1456.5, 92), JSON_ARRAY(1456.5, 232), JSON_ARRAY(1336.5, 232))
      )
      WHERE target.title = "Bútorasztalos, Épületasztalos" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Cukrász, Pék",
        "cukrasz-pek",
        NULL,
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
        WHERE (a.title = "Cukrász" AND a.slug LIKE "osztvszktv%") OR (a.title = "Cukrász szaktechnikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Cukrász, Cukrász szaktechnikus" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Pék" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(807.5, 655), JSON_ARRAY(1099.5, 655), JSON_ARRAY(1099.5, 789), JSON_ARRAY(807.5, 789))
      )
      WHERE target.title = "Cukrász, Pék" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Divatszabó",
        "divatszabo",
        NULL,
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
        WHERE (a.title = "Divatszabó" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Divatszabó - Női szabó szakmairány" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1149.5, 213), JSON_ARRAY(1286.5, 213), JSON_ARRAY(1286.5, 303), JSON_ARRAY(1149.5, 303))
      )
      WHERE target.title = "Divatszabó" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Festő",
        "festo",
        NULL,
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
        WHERE (a.title = "Festő, díszítőfestő" AND a.slug LIKE "wshu%") OR (a.title = "Festő, mázoló, tapétázó" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1162.5, 639), JSON_ARRAY(1323.5, 639), JSON_ARRAY(1323.5, 789), JSON_ARRAY(1162.5, 789))
      )
      WHERE target.title = "Festő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Fodrász",
        "fodrasz",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(824.5, 112), JSON_ARRAY(909.5, 112), JSON_ARRAY(909.5, 302), JSON_ARRAY(824.5, 302))
      )
      WHERE target.title = "Fodrász" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Gépésztechnikus",
        "gepesztechnikus",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(641.5, 102), JSON_ARRAY(758.5, 102), JSON_ARRAY(758.5, 194), JSON_ARRAY(641.5, 194))
      )
      WHERE target.title = "Gépésztechnikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Informatikai rendszerüzemeltető, Szoftverfejlesztő, Webfejlesztő",
        "informatikai-rendszeruzemelteto-szoftverfejleszto-webfejleszto",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 661), JSON_ARRAY(547.5, 661), JSON_ARRAY(547.5, 818), JSON_ARRAY(426.5, 818))
      )
      WHERE target.title = "Informatikai rendszerüzemeltető, Szoftverfejlesztő, Webfejlesztő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Jármű- és szerviztechnika",
        "jarmu-es-szerviztechnika",
        NULL,
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
        WHERE (a.title = "Alternatív járműhajtási technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Gépjármű-mechatronikai technikus - Gyártás szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Gépjármű-mechatronikai technikus - Szerviz szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Jármű- és szerviztechnika" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Karosszérialakatos" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(426.5, 102), JSON_ARRAY(639.5, 102), JSON_ARRAY(639.5, 323), JSON_ARRAY(426.5, 323))
      )
      WHERE target.title = "Jármű- és szerviztechnika" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Kereskedelmi értékesítő, Kereskedő és webáruházi technikus",
        "kereskedelmi-ertekesito-kereskedo-es-webaruhazi-technikus",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1149.5, 372), JSON_ARRAY(1300.5, 372), JSON_ARRAY(1300.5, 551), JSON_ARRAY(1149.5, 551))
      )
      WHERE target.title = "Kereskedelmi értékesítő, Kereskedő és webáruházi technikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Kertépítő",
        "kertepito",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1181.5, 105), JSON_ARRAY(1281.5, 105), JSON_ARRAY(1281.5, 165), JSON_ARRAY(1181.5, 165))
      )
      WHERE target.title = "Kertépítő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Kozmetikus, Szépségápoló",
        "kozmetikus-szepsegapolo",
        NULL,
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
        WHERE (a.title = "Kozmetikus" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Kozmetikus technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Szépségápoló" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(272.5, 416), JSON_ARRAY(442.5, 416), JSON_ARRAY(442.5, 567), JSON_ARRAY(272.5, 567))
      )
      WHERE target.title = "Kozmetikus, Szépségápoló" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Mechatronika, Automatikai Technikus, Ipar 4.0",
        "mechatronika-automatikai-technikus-ipar-4-0",
        NULL,
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
        WHERE (a.title = "Automatikai technikus - Autóipar szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Automatikai technikus - Gyártástechnika szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Automatikai technikus, Mechatronikai technikus, Ipar 4.0" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Ipar 4.0" AND a.slug LIKE "osztvszktv%") OR (a.title = "Ipar 4.0" AND a.slug LIKE "wshu%") OR (a.title = "Mechatronika" AND a.slug LIKE "wshu%") OR (a.title = "Mechatronikai technikus" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(603.5, 658), JSON_ARRAY(765.5, 658), JSON_ARRAY(765.5, 818), JSON_ARRAY(603.5, 818))
      )
      WHERE target.title = "Mechatronika, Automatikai Technikus, Ipar 4.0" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Nyomdaipar",
        "nyomdaipar",
        NULL,
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
        WHERE (a.title = "Nyomdaipar" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Nyomdaipari technikus - Nyomdaipari előkészítő szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Nyomdaipari technikus - Nyomdaipari gépmester szakmairány" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(264.5, 637), JSON_ARRAY(365.5, 637), JSON_ARRAY(365.5, 818), JSON_ARRAY(264.5, 818))
      )
      WHERE target.title = "Nyomdaipar" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Pincér, Vendégtéri szaktechnikus",
        "pincer-vendegteri-szaktechnikus",
        NULL,
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
        WHERE (a.title = "Pincér" AND a.slug LIKE "wshu%") OR (a.title = "Pincér - vendégtéri szakember" AND a.slug LIKE "osztvszktv%") OR (a.title = "Vendéglátás" AND a.slug LIKE "interaktiv-szakmabemutato%") OR (a.title = "Vendégtéri szaktechnikus" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(714.5, 372), JSON_ARRAY(905.5, 372), JSON_ARRAY(905.5, 582), JSON_ARRAY(714.5, 582))
      )
      WHERE target.title = "Pincér, Vendégtéri szaktechnikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Szakács",
        "szakacs",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(907.5, 372), JSON_ARRAY(1147.5, 372), JSON_ARRAY(1147.5, 582), JSON_ARRAY(907.5, 582))
      )
      WHERE target.title = "Szakács" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Vegyész technikus",
        "vegyesz-technikus",
        NULL,
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
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(641.5, 196), JSON_ARRAY(758.5, 196), JSON_ARRAY(758.5, 294), JSON_ARRAY(641.5, 294))
      )
      WHERE target.title = "Vegyész technikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Villanyszerelő, Erősáramú elektrotechnikus, Elektronikai technikus",
        "villanyszerelo-erosaramu-elektrotechnikus-elektronikai-technikus",
        NULL,
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
        WHERE (a.title = "Elektronikai technikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Erősáramú elektrotechnikus" AND a.slug LIKE "osztvszktv%") OR (a.title = "Villanyszerelő - Épületvillamossági szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Villanyszerelő - Villamos hálózat szakmairány" AND a.slug LIKE "osztvszktv%") OR (a.title = "Villanyszerelő - Villamos készülék és berendezés szakmairány" AND a.slug LIKE "osztvszktv%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(943.5, 112), JSON_ARRAY(1104.5, 112), JSON_ARRAY(1104.5, 302), JSON_ARRAY(943.5, 302))
      )
      WHERE target.title = "Villanyszerelő, Erősáramú elektrotechnikus, Elektronikai technikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Bálint Analitika",
        "balint-analitika",
        NULL,
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
        WHERE title = "Bálint Analitika"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Bálint Analitika" AND a.slug LIKE "interaktiv-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(760.5, 215), JSON_ARRAY(786.5, 215), JSON_ARRAY(786.5, 283), JSON_ARRAY(760.5, 283))
      )
      WHERE target.title = "Bálint Analitika" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "CNC maró",
        "cnc-maro",
        7,
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
        WHERE title = "CNC maró"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "CNC maró" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(338.5, 263), JSON_ARRAY(377.5, 263), JSON_ARRAY(377.5, 313), JSON_ARRAY(338.5, 313))
      ), target.subtitle = 7
      WHERE target.title = "CNC maró" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Grafikus",
        "grafikus",
        6,
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
        WHERE title = "Grafikus"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Grafikus" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(257.5, 263), JSON_ARRAY(336.5, 263), JSON_ARRAY(336.5, 313), JSON_ARRAY(257.5, 313))
      ), target.subtitle = 6
      WHERE target.title = "Grafikus" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "HM Kadét",
        "hm-kadet",
        NULL,
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
        WHERE title = "HM Kadét"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "HM Kadét" AND a.slug LIKE "egyeb-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1356.5, 372), JSON_ARRAY(1456.5, 372), JSON_ARRAY(1456.5, 451), JSON_ARRAY(1356.5, 451))
      )
      WHERE target.title = "HM Kadét" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Hűtő- és klímatechnikai szerelő",
        "huto-es-klimatechnikai-szerelo",
        1,
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
        WHERE title = "Hűtő- és klímatechnikai szerelő"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Hűtő- és klímatechnikai szerelő" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(123.5, 739), JSON_ARRAY(213.5, 739), JSON_ARRAY(213.5, 818), JSON_ARRAY(123.5, 818))
      ), target.subtitle = 1
      WHERE target.title = "Hűtő- és klímatechnikai szerelő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "IKK",
        "ikk",
        NULL,
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
        WHERE title = "IKK"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "IKK" AND a.slug LIKE "egyeb-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1404.5, 514), JSON_ARRAY(1456.5, 514), JSON_ARRAY(1456.5, 542), JSON_ARRAY(1404.5, 542))
      )
      WHERE target.title = "IKK" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Ipari robotika",
        "ipari-robotika",
        5,
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
        WHERE title = "Ipari robotika"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Ipari robotika" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(257.5, 315), JSON_ARRAY(377.5, 315), JSON_ARRAY(377.5, 373), JSON_ARRAY(257.5, 373))
      ), target.subtitle = 5
      WHERE target.title = "Ipari robotika" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Magyar Kémikusok Egyesülete",
        "magyar-kemikusok-egyesulete",
        NULL,
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
        WHERE title = "Magyar Kémikusok Egyesülete"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Magyar Kémikusok Egyesülete" AND a.slug LIKE "interaktiv-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(760.5, 139), JSON_ARRAY(786.5, 139), JSON_ARRAY(786.5, 201), JSON_ARRAY(760.5, 201))
      )
      WHERE target.title = "Magyar Kémikusok Egyesülete" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "MÁV",
        "mav",
        NULL,
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
        WHERE title = "MÁV"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "MÁV" AND a.slug LIKE "interaktiv-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1150.5, 554), JSON_ARRAY(1300.5, 554), JSON_ARRAY(1300.5, 583), JSON_ARRAY(1150.5, 583))
      )
      WHERE target.title = "MÁV" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "MESZK",
        "meszk",
        NULL,
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
        WHERE title = "MESZK"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "MESZK" AND a.slug LIKE "interaktiv-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(124.5, 524), JSON_ARRAY(213.5, 524), JSON_ARRAY(213.5, 574), JSON_ARRAY(124.5, 574))
      )
      WHERE target.title = "MESZK" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "MOL",
        "mol",
        NULL,
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
        WHERE title = "MOL"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "MOL" AND a.slug LIKE "interaktiv-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1356.5, 453), JSON_ARRAY(1456.5, 453), JSON_ARRAY(1456.5, 512), JSON_ARRAY(1356.5, 512))
      )
      WHERE target.title = "MOL" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Richter Gedeon Nyrt.",
        "richter-gedeon-nyrt",
        NULL,
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
        WHERE title = "Richter Gedeon Nyrt."
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Richter Gedeon Nyrt." AND a.slug LIKE "egyeb-szakmabemutato%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(696.5, 296), JSON_ARRAY(758.5, 296), JSON_ARRAY(758.5, 330), JSON_ARRAY(696.5, 330))
      )
      WHERE target.title = "Richter Gedeon Nyrt." AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Villanyszerelő",
        "villanyszerelo",
        NULL,
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
        WHERE title = "Villanyszerelő"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Villanyszerelő" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1336.5, 234), JSON_ARRAY(1456.5, 234), JSON_ARRAY(1456.5, 293), JSON_ARRAY(1336.5, 293))
      )
      WHERE target.title = "Villanyszerelő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Virágkötő",
        "viragkoto",
        NULL,
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
        WHERE title = "Virágkötő"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Virágkötő" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(1154.5, 105), JSON_ARRAY(1179.5, 105), JSON_ARRAY(1179.5, 165), JSON_ARRAY(1154.5, 165))
      )
      WHERE target.title = "Virágkötő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";

INSERT INTO `Article` (`id`, `title`, `slug`, `subtitle`, `content`, `siteId`, `categoryId`, `createdAt`, `updatedAt`, `lead`, `position`, `metadata`)
      SELECT 
        UUID(),
        "Víz-, gáz- és fűtésszerelő",
        "viz-gaz-es-futesszerelo",
        2,
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
        WHERE title = "Víz-, gáz- és fűtésszerelő"
          AND categoryId LIKE "szakmasztar-app-g-pavilon%"
      );

UPDATE Article target
      JOIN (
        SELECT JSON_ARRAYAGG(a.id) AS article_ids
        FROM Article a
        WHERE (a.title = "Víz-, gáz- és fűtésszerelő" AND a.slug LIKE "wshu%")
      ) agg
      SET target.metadata = JSON_SET(
        COALESCE(target.metadata, JSON_OBJECT()),
        '$.articleIds', COALESCE(agg.article_ids, JSON_ARRAY()),
        '$.coordinates', JSON_ARRAY(JSON_ARRAY(123.5, 658), JSON_ARRAY(213.5, 658), JSON_ARRAY(213.5, 737), JSON_ARRAY(123.5, 737))
      ), target.subtitle = 2
      WHERE target.title = "Víz-, gáz- és fűtésszerelő" AND target.categoryId LIKE "szakmasztar-app-g-pavilon%";