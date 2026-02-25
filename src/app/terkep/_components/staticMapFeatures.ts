export const staticMapFeatures = {
  type: "FeatureCollection" as const,
  name: "szakmasztar-map-data",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature" as const,
      properties: { id: 1, name: "A Pavilon", type: "building", color: "#fdb913" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.125504438450687, 47.494126740649946],
              [19.128142234025486, 47.494121222800096],
              [19.128140045803654, 47.493809679377392],
              [19.128346363862804, 47.49380841207833],
              [19.128342612625364, 47.493164620205214],
              [19.1257236236866, 47.493170534339697],
              [19.125726124511559, 47.493476378672661],
              [19.125501362868334, 47.493476801108365],
              [19.125504438450687, 47.494126740649946],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: 2, name: "D Pavilon", type: "building", color: "#732265" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.124366750306862, 47.4939672862577],
              [19.125346565710949, 47.493971431369047],
              [19.125353208527216, 47.493312169741102],
              [19.125189443567574, 47.493311404073999],
              [19.125189638944519, 47.493283047981286],
              [19.12502399836616, 47.493282889567318],
              [19.12502337315992, 47.493315311616307],
              [19.124372025483417, 47.493313569063695],
              [19.124366750306862, 47.4939672862577],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: 3, name: "Kongresszusi Központ", type: "building", color: "#5e9984" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.126020984642945, 47.492031767112628],
              [19.12668650374631, 47.492030331514805],
              [19.126686745984479, 47.491967219744858],
              [19.126844604527768, 47.491967056066066],
              [19.126841859161804, 47.491396168672118],
              [19.126683788660003, 47.491395854951065],
              [19.126683702867318, 47.491349054226113],
              [19.126026480421526, 47.491350849598788],
              [19.12602634416255, 47.491406521466253],
              [19.125870827254875, 47.491408332182012],
              [19.125874369988168, 47.49195602479768],
              [19.126019712892532, 47.491954551688373],
              [19.126020984642945, 47.492031767112628],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "1. Kapu", type: "gate", rotate: 90, offset: [-2.5, -0.5] },
      geometry: {
        type: "Point" as const,
        coordinates: [19.12149074317265, 47.49385554550067],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "2. Kapu", type: "gate", rotate: 30, offset: [0, 0.5] },
      geometry: {
        type: "Point" as const,
        coordinates: [19.123364303846227, 47.491661485734795],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "3. Kapu", type: "gate", rotate: -10, offset: [0, 0.5] },
      geometry: {
        type: "Point" as const,
        coordinates: [19.128480072915814, 47.49149239671809],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "6. Kapu", type: "gate", rotate: -20, offset: [0, 0.5] },
      geometry: {
        type: "Point" as const,
        coordinates: [19.13304257141438, 47.4924158494168],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "Pillangó utca", type: "metro2" },
      geometry: {
        type: "Point" as const,
        coordinates: [19.119977952137504, 47.50121466907854],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "Örs vezér tere", type: "metro2" },
      geometry: {
        type: "Point" as const,
        coordinates: [19.135853086522708, 47.50289728189773],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, type: "outline", name: "Hungexpo" },
      geometry: {
        type: "MultiPolygon" as const,
        coordinates: [
          [
            [
              [19.120680814508553, 47.495264487736733],
              [19.121271225558718, 47.49551178667101],
              [19.121703986332474, 47.495540799770275],
              [19.123438258985523, 47.495260850979037],
              [19.123693752908348, 47.495281701719911],
              [19.124315083986062, 47.495134897781156],
              [19.124619110988998, 47.495142398611634],
              [19.125356728582606, 47.495688683490592],
              [19.125606413786464, 47.496076129993654],
              [19.134961535036037, 47.493977665906876],
              [19.134383847846529, 47.492701117193427],
              [19.133053509639055, 47.492568320590415],
              [19.12991335739817, 47.49201762537438],
              [19.129255284491187, 47.49185174248445],
              [19.128675894214396, 47.491701221864503],
              [19.127841040852591, 47.491700186170675],
              [19.127839508074075, 47.491432803862679],
              [19.126923161988167, 47.491306275801499],
              [19.126840391948623, 47.491397417464263],
              [19.125870654077943, 47.491410881560135],
              [19.125871675930281, 47.491605592714414],
              [19.12439918670831, 47.491615259206803],
              [19.12424999626667, 47.491503403971684],
              [19.123557180380129, 47.49170087663321],
              [19.123563822420333, 47.491809969603338],
              [19.123295586181079, 47.491866414769497],
              [19.123249347362691, 47.491856403093081],
              [19.121773537120621, 47.492632474970456],
              [19.121378591191199, 47.492914177939447],
              [19.121429683808206, 47.493231782415734],
              [19.1215982894443, 47.493229365867194],
              [19.121814666677302, 47.493436325586039],
              [19.121803937227728, 47.493632064886533],
              [19.121760636234825, 47.493775761924454],
              [19.121740710114199, 47.493972794521042],
              [19.12174760761749, 47.494104839605676],
              [19.121449099002671, 47.494107428721655],
              [19.121449146902002, 47.49415060221191],
              [19.121203854441063, 47.494573823520149],
              [19.121007275597147, 47.494865678209415],
              [19.120680814508553, 47.495264487736733],
            ],
          ],
        ],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "WC", type: "poi", poiType: "toilet", icon: "wc", size: 0.5 },
      geometry: {
        type: "Point" as const,
        coordinates: [19.1268, 47.4935],
      },
    },
    {
      type: "Feature" as const,
      properties: { id: null, name: "WC", type: "poi", poiType: "toilet", icon: "wc", size: 0.5 },
      geometry: {
        type: "Point" as const,
        coordinates: [19.127, 47.4935],
      },
    },
    {
      type: "Feature" as const,
      properties: {
        id: null,
        name: "Étterem / Büfé",
        type: "poi",
        poiType: "restaurant",
        icon: "restaurant",
        size: 0.5,
      },
      geometry: {
        type: "Point" as const,
        coordinates: [19.1248, 47.4935],
      },
    },
    {
      type: "Feature" as const,
      properties: {
        id: null,
        name: "Ételcsomag",
        type: "poi",
        poiType: "food",
        icon: "food",
        size: 0.5,
      },
      geometry: {
        type: "Point" as const,
        coordinates: [19.1248, 47.4937],
      },
    },

    {
      type: "Feature" as const,
      properties: {
        id: null,
        name: "HelloPay feltöltő pont",
        type: "poi",
        poiType: "hellopay",
        icon: "hellopay",
        size: 0.5,
      },
      geometry: {
        type: "Point" as const,
        coordinates: [19.1248, 47.4939],
      },
    },
  ],
};
