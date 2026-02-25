export const IPARAGI_QUESTIONS = [
  {
    id: 1,
    question: "Szívesen foglalkozom növényekkel, állatokkal",
    letter: "A",
  },
  {
    id: 2,
    question: "Szívesen szórakoztatok más embereket",
    letter: "H",
  },
  {
    id: 3,
    question: "Könnyen ráveszem a barátaimat arra, amit akarok",
    letter: "G",
  },
  {
    id: 4,
    question: "Szeretek gépekkel, elektromos berendezésekkel foglalkozni",
    letter: "M",
  },
  {
    id: 5,
    question: "Szeretek segíteni a barátaimnak problémáik megoldásában",
    letter: "H",
  },
  {
    id: 6,
    question: "Szívesen dolgozom kerti eszközökkel",
    letter: "A",
  },
  {
    id: 7,
    question: "Szeretek gépeket összeszerelni, javítani",
    letter: "M",
  },
  {
    id: 8,
    question: "Szívesen oldok meg számolási és bonyolult logikai feladatokat",
    letter: "G",
  },
  {
    id: 9,
    question: "Szeretek irodában, tiszta környezetben dolgozni",
    letter: "G",
  },
  {
    id: 10,
    question: "Szeretek segíteni rászoruló időseknek, betegeknek",
    letter: "H",
  },
  {
    id: 11,
    question: "Szívesen dolgozom a szabadban",
    letter: "A",
  },
  {
    id: 12,
    question:
      "Szívesen dolgozom egyedül olyan feladatokon, mint például tervezetek, modellek készítése",
    letter: "M",
  },
  {
    id: 13,
    question: "Szeretem a fizikai erőt igénylő feladatokat",
    letter: "A",
  },
  {
    id: 14,
    question: "Szívesen töltöm az időmet kisebb gyerekekkel",
    letter: "H",
  },
  {
    id: 15,
    question: "Szeretek eladni, vásárolni",
    letter: "G",
  },
  {
    id: 16,
    question:
      "Szívesen végzek kisebb ház körüli javításokat, mint például: vízvezetékszerelés,  varrás, autószerelés, tapétázás",
    letter: "M",
  },
];

export const IPARAGI_ANSWERS = {
  A: {
    title: "Agrár",
    description:
      "Az agrár területen dolgozók gondoskodnak egy adott ország vagy egy országrész élelmezéséről. Ehhez a szakterülethez kapcsolható foglalkozások például a pék, cukrász, szakács, malomipari munkás, növényolaj-gyártó, juhtenyésztő, agrármérnök.",
  },
  H: {
    title: "Humán",
    description:
      "A humán szakterületen dolgozók az emberi viselkedés tanulmányozásával, valamint az emberek társadalmi helyzetének javításával foglalkoznak.Ehhez kapcsolható foglalkozások például a mentőápoló, pszihológus, szociális munkás, szociálpedagógus, csecsemő- és kisgyermekgondozó.",
  },
  G: {
    title: "Gazdasági-szolgáltató",
    description:
      "A gazdaság területen dolgozók az anyagi javak és a szolgáltatások előállításával, felosztásával foglalkoznak. A szolgáltatás területen dolgozók elsődleges célja más emberek igényeinek, szükségleteinek kielégítése és tanácsadás. Ehhez a szakterülethez kapcsolható foglalkozások: könyvelő, bolti eladó, idegenvezető, PR-menedzser.",
  },
  M: {
    title: "Műszaki",
    description:
      "A műszaki szakterületen dolgozó emberek a nyersanyag kitermelésétől kezdve a késztermék előállításáig tartó folyamat bármely szakaszában végezhetnek munkát. A szakterület legtöbb ágazata gépesített, ezért a munkafeladatok kevés fizikai erőt, viszont jó műszaki érzéket igényelnek. Ehhez a szakterülethez kapcsolható foglalkozások például esztergályos, elektroműszerész, informatikus.",
  },
};

export const EREDMENYORIENTACIONS_QUESTIONS = [
  {
    id: 1,
    question: "Szereted ha az órán téged kérdeznek?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 2,
    question: "Gyakran elkalandoznak a gondolataid a tárgytól?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 3,
    question: "Szüleid azt akarják, hogy az iskola befejezése után azonnal dolgozni menj?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 4,
    question: "Úgy érzed, hogy az iskola tulajdonképpen felesleges időtöltés?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 5,
    question: "A házi feladatot szereted az utolsó pillanatra hagyni?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 6,
    question: "Ha egy dolgozatra a szokásosnál gyengébb jegyet kapnál, elkeserednél?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 7,
    question: "Úgy érzed, az iskolában tanultak később a munkádban is hasznodra válnak majd?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 8,
    question: "Fontos neked, hogy jól teljesíts az iskolában?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 9,
    question: "Jobban szereted a kezedet használni, mint a fejedet?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 10,
    question: "Ha egy bonyolult problémát kapsz feladatul, élvezed a megoldás keresését?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 11,
    question: "Szüleid számítanak arra, hogy egyetemre vagy főiskolára fogsz járni?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 12,
    question: "Általában eléggé unalmasnak tartod az órákat?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 13,
    question: "Félsz, amikor a házi feladatodat ellenőrzi a tanár?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 14,
    question: "Társaid szerint te sohasem veszed komolyan a munkát?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 15,
    question: "Szeretnéd a lehető leggyorsabban abbahagyni az iskolai tanulást?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 16,
    question:
      "Szüleid azt mondják, csináld azt, ami neked jól esik, és ne izgasd magad az iskola miatt?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 17,
    question: "Többnyire komolyan, kitartóan dolgozol?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 18,
    question:
      "Szüleid szerint jól kell teljesítened az iskolában, hogy később boldogulhass az életben?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 19,
    question: "A tanítási órákat általában élvezed?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 20,
    question: "Tanáraid szerint sokat rendetlenkedsz?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 21,
    question: "Nyugtalanságot ébreszt benned az a gondolat, hogy nem jól teljesítesz az iskolában?",
    pointForYes: 1,
    pointForNo: 0,
  },
  {
    id: 22,
    question: "Fontosabb neked a játék, mint az iskolai munka?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 23,
    question: "Nehezedre esik az, hogy csak a feladatokra figyelj?",
    pointForYes: 0,
    pointForNo: 1,
  },
  {
    id: 24,
    question: "Mindig mindent elkövetsz, hogy kész legyen a házi feladatod?",
    pointForYes: 1,
    pointForNo: 0,
  },
];

export const KOMPETENCIA_QUESTIONS = [
  {
    categoryId: "category-1",
    categoryName: "Kézügyesség",
    description:
      "A jó kézügyességgel rendelkező emberekre jellemző, hogy ügyesen használják a kezüket. Precízen dolgoznak a kézi szerszámokkal, könnyen össze tudnak illeszteni tárgyakat, alkatrészeket. A kezüket, csuklójukat, ujjaikat ügyesen tudják használni, amikor tárgyakat elhelyeznek, forgatnak, tolnak vagy húznak.",
    questions: [
      { id: 1, question: "Papírlapból alakzatok hajtogatása", value: 0 },
      { id: 2, question: "Felém hajított tárgyak - például labda - elkapása", value: 0 },
      { id: 3, question: "Számítógép billentyűzetének pontos, gyors kezelése", value: 0 },
      { id: 4, question: "Parányi tárgyak összeszedése az asztallapról", value: 0 },
      { id: 5, question: "Egy rajz körvonalainak kivágása papírlapból", value: 0 },
      { id: 6, question: "Tárgyak kisebb darabokból való összerakása", value: 0 },
    ],
  },
  {
    categoryId: "category-2",
    categoryName: "Problémamegoldó készség",
    description:
      "A magas problémamegoldó képességgel rendelkező személy képes olyan helyzeteket is megoldani, amelyekre nincsenek bevált módszerek, A helyzeteket új megvilágításba tudja helyezni, és új összefüggésekben tudja látni őket, ami segíti a megoldást.",
    questions: [
      { id: 7, question: "Logikai fejtörők megoldása", value: 0 },
      { id: 8, question: "Problémák lényegének megértése", value: 0 },
      { id: 9, question: "Gépek, berendezések működési elvének megértése", value: 0 },
      { id: 10, question: "Magamtól rájönni a feladatok megoldására", value: 0 },
      { id: 11, question: "Bonyolult feladatokat a társaimnál gyorsabban megoldani", value: 0 },
      { id: 12, question: "Egy probléma különböző megoldására rájönni", value: 0 },
    ],
  },
  {
    categoryId: "category-3",
    categoryName: "Kommunikációs képesség",
    description:
      "A jó kommunikációs képességgel rendelkező emberekre jellemző, hogy könnyedén, választékosan tudnak érvelni, válaszolni, vagy kifejteni egy témát. Írásban és szóban egyaránt jól és a helyzetnek megfelelően fejezik ki magukat.",
    questions: [
      { id: 13, question: "Sok ember előtt beszélni", value: 0 },
      { id: 14, question: "Szóban ismertetett feladatok megértése", value: 0 },
      { id: 15, question: "Fogalmazást írni", value: 0 },
      { id: 16, question: "Szóban felelni", value: 0 },
      { id: 17, question: "Érvelni a saját álláspontom mellett", value: 0 },
      { id: 18, question: "Kiselőadást tartani", value: 0 },
    ],
  },
  {
    categoryId: "category-4",
    categoryName: "Számolási készség",
    description:
      "A jó számolási kézséggel rendelkező emberekre jellemző, hogy könnyedén hajtják végre az alapvető számtani, matematikai műveleteket, Ügyesen adnak össze, vagy vonnak ki számokat fejben, de a szorzás, osztás vagy a százalékszámítás sem okoz gondot.",
    questions: [
      { id: 19, question: "Számok összeadása fejben", value: 0 },
      { id: 20, question: "Egyenletek megoldása", value: 0 },
      {
        id: 21,
        question: "Szöveges matematikai feladatok megoldásához egyenlet felírása",
        value: 0,
      },
      { id: 22, question: "Matematikai tételek bizonyítása", value: 0 },
      { id: 23, question: "Síkidomok alapterületének kiszámítása", value: 0 },
      { id: 24, question: "Matematikai tételek megtanulása", value: 0 },
    ],
  },
  {
    categoryId: "category-5",
    categoryName: "Együttműködési képesség",
    description:
      "A magas együttműködési képességgel rendelkező személy képes másokkal jó kapcsolatokat kialakítani és fenntartani. Fontos a másokkal közös cél és a közös eredmény.",
    questions: [
      { id: 25, question: "Aktívan részt venni a csapatjátékokban", value: 0 },
      { id: 26, question: "Mások kritikáját elfogadni", value: 0 },
      { id: 27, question: "A közös cél érdekében a nézeteltérések félre tétele", value: 0 },
      { id: 28, question: "Közösségben jó hangulat kialakítása és fenntartása", value: 0 },
      { id: 29, question: "Közös tevékenység a csoporttársaimmal", value: 0 },
      { id: 30, question: "A konfliktushelyzet elsimítása", value: 0 },
    ],
  },
];

export const SZAKMASZTAR_QUESTIONS = [
  {
    id: 1,
    question: "Melyik szakma felelős egy elektromos hálózat kiépítéséért és karbantartásáért?",
    answers: [
      { text: "Ipar 4.0", correct: false },
      { text: "Villanyszerelő", correct: true },
      { text: "Automatikai technikus", correct: false },
      { text: "Elektrotechnikai technikus", correct: false },
    ],
  },
  {
    id: 2,
    question: "Melyik szakma versenyzőinek a feladata a pezsgőtöltés és a díszasztalkészítés?",
    answers: [
      { text: "Szakács", correct: false },
      { text: "Kereskedő", correct: false },
      { text: "Pincér – vendégtéri szakember", correct: true },
      { text: "Cukrász", correct: false },
    ],
  },
  {
    id: 3,
    question: "Melyik ágazathoz tartozik a kereskedő és webáruházi technikus szakma?",
    answers: [
      { text: "Informatika és távközlés", correct: false },
      { text: "Turizmus-vendéglátás", correct: false },
      { text: "Kereskedelem", correct: true },
      { text: "Közlekedés és szállítmányozás", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Melyik szakmára igaz, hogy előregyártott elemekkel dolgozik, könnyű szerkezeteket használ és nincs szükség száradási időre?",
    answers: [
      { text: "Burkoló", correct: false },
      { text: "Kőműves", correct: false },
      { text: "Ács", correct: false },
      { text: "Szárazépítő", correct: true },
    ],
  },
  {
    id: 5,
    question: "2026-ban hol kerül megrendezésre a WorldSkills verseny?",
    answers: [
      { text: "Herning, Dánia", correct: false },
      { text: "Shanghai, Kína", correct: true },
      { text: "Lyon, Franciaország", correct: false },
      { text: "Gdansk, Lengyelország", correct: false },
    ],
  },
  {
    id: 6,
    question: "Milyen bizonyítványt kapsz, ha elvégzed a grafikus szakmát?",
    answers: [
      { text: "érettségi bizonyítvány", correct: false },
      { text: "érettségi + technikusi bizonyítvány", correct: true },
      { text: "szakmai bizonyítvány", correct: false },
      { text: "nem kapok bizonyítványt", correct: false },
    ],
  },
  {
    id: 7,
    question: "Melyik szakma standjánál látsz hajlított csőrendszereket?",
    answers: [
      { text: "Épületasztalos", correct: false },
      { text: "Központifűtés és gázhálózat szerelő", correct: true },
      { text: "Automatikai technikus", correct: false },
      { text: "CNC-programozó", correct: false },
    ],
  },
  {
    id: 8,
    question: "Az alábbiak közül melyik szakma eszközei a csiszológép, az orrfűrész és a gyalu?",
    answers: [
      { text: "Mechatronikai technikus", correct: false },
      { text: "Asztalos", correct: true },
      { text: "Villanyszerelő", correct: false },
      { text: "Gépi és CNC forgácsoló", correct: false },
    ],
  },
  {
    id: 9,
    question: "A szépészet ágazatban melyik két szakmában lehet versenyezni?",
    answers: [
      { text: "Műkörmös és Műszempillás", correct: false },
      { text: "Kozmetikus technikus és Fodrász", correct: true },
      { text: "Sminkes és Masszőr", correct: false },
      { text: "Kéz- és lábápoló technikus és Borbély", correct: false },
    ],
  },
  {
    id: 10,
    question:
      "Milyen pályaorientációs programot szerveznek a területi kereskedelmi és iparkamarák?",
    answers: [
      { text: "Sítábor", correct: false },
      { text: "Cég- és üzemlátogatás", correct: true },
      { text: "Filmklub", correct: false },
      { text: "Focitúra", correct: false },
    ],
  },
  {
    id: 11,
    question: "Minek a rövidítése az MKIK?",
    answers: [
      { text: "Megyei Kisiskolások Közössége", correct: false },
      { text: "Magyar Kereskedők Ipari Közössége", correct: false },
      { text: "Magyar Kereskedelmi és Iparkamara", correct: true },
      { text: "Magyar Közértek Igazgatósági Központja", correct: false },
    ],
  },
];
