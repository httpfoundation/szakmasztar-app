import fs from "fs";
import { decode as decodeHtml } from "he";
import { JSDOM } from "jsdom";

export type MapItem = {
  name: string;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export type Building = {
  name: string;
  articles: MapItem[];
  booths: MapItem[];
  svgWidth: number;
  svgHeight: number;
};

export type Data = {
  buildings: Building[];
};

function normalizeText(value: string | null): string {
  if (!value) return "";

  // 1. Fix UTF-8 text that was mis-decoded as latin1
  const utf8Fixed = Buffer.from(value, "latin1").toString("utf8");

  // 2. Decode HTML entities (&#197;&#145; etc.)
  return decodeHtml(utf8Fixed);
}

const num = (v: string | null) => (v ? Number(v) : 0);
const text = (v: string | null) => (v ? normalizeText(v.trim()) : "");

function parseRect(rect: Element): MapItem {
  let name = text(rect.getAttribute("id"));
  let type = "osztvszktv";

  if (name.endsWith(" WS")) {
    type = "wshu";
  } else if (name.endsWith(" ISZB")) {
    type = "interaktiv-szakmabemutato";
  } else if (name.endsWith(" ESZB")) {
    type = "egyeb-szakmabemutato";
  }

  name = name.replace(" WS", "").replace(" ISZB", "").replace(" ESZB", "").trim();

  return {
    name,
    type,
    x: num(rect.getAttribute("x")),
    y: num(rect.getAttribute("y")),
    width: num(rect.getAttribute("width")),
    height: num(rect.getAttribute("height")),
  };
}

export function parseSvg(svgText: string): Data {
  const dom = new JSDOM(svgText, { contentType: "image/svg+xml" });
  const doc = dom.window.document;

  const buildings: Building[] = [];

  // each top-level <g> under the SVG is treated as a "building"
  const buildingGroups = Array.from(doc.querySelectorAll("svg > g")) as SVGElement[];

  const svgWidth = num(doc.querySelector("svg").getAttribute("width"));
  const svgHeight = num(doc.querySelector("svg").getAttribute("height"));

  for (const buildingGroup of buildingGroups) {
    const name = text(buildingGroup.getAttribute("id"));

    const articlesGroup = buildingGroup.querySelector("g#articles");
    const boothsGroup = buildingGroup.querySelector("g#booths");

    const articles: MapItem[] = articlesGroup
      ? Array.from(articlesGroup.querySelectorAll("rect")).map(parseRect)
      : [];

    const booths: MapItem[] = boothsGroup
      ? Array.from(boothsGroup.querySelectorAll("rect")).map(parseRect)
      : [];

    buildings.push({
      name,
      articles,
      booths,
      svgWidth,
      svgHeight,
    });
  }

  return { buildings };
}

const filePath = process.argv[2];

const main = () => {
  console.log(filePath);
  const svgText = fs.readFileSync(filePath, "utf-8");
  const data = parseSvg(svgText);
  console.log(data);

  fs.writeFileSync(filePath.replace(".svg", "") + "-data.json", JSON.stringify(data, null, 2));
};

main();
