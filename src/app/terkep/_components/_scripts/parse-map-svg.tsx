import fs from "fs";
import { decode as decodeHtml } from "he";
import { JSDOM } from "jsdom";

export type MapItem = {
  name: string;
  type: string;
  coordinates: [number, number][];
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

/** Extracts the name and type suffix from an element's id attribute. */
function extractNameAndType(el: Element): { name: string; type: string } {
  let name = text(el.getAttribute("id"));
  let type = "osztvszktv";

  if (name.endsWith(" WS")) {
    type = "wshu";
  } else if (name.endsWith(" ISZB")) {
    type = "interaktiv-szakmabemutato";
  } else if (name.endsWith(" ESZB")) {
    type = "egyeb-szakmabemutato";
  }

  name = name.replace(" WS", "").replace(" ISZB", "").replace(" ESZB", "").trim();

  return { name, type };
}

/** Converts a <rect> element to corner coordinates. */
function rectToCoordinates(rect: Element): [number, number][] {
  const x = num(rect.getAttribute("x"));
  const y = num(rect.getAttribute("y"));
  const w = num(rect.getAttribute("width"));
  const h = num(rect.getAttribute("height"));

  return [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h],
  ];
}

/**
 * Parses an SVG path `d` attribute into coordinate pairs.
 * Supports the absolute commands used in polygon-like paths: M, L, H, V, Z.
 */
function pathToCoordinates(path: Element): [number, number][] {
  const d = path.getAttribute("d") ?? "";
  const coords: [number, number][] = [];

  let cx = 0;
  let cy = 0;

  // Tokenise: split on command letters while keeping them
  const tokens = d.match(/[MLHVZmlhvz][^MLHVZmlhvz]*/gi) ?? [];

  for (const token of tokens) {
    const cmd = token[0];
    const args = token
      .slice(1)
      .trim()
      .split(/[\s,]+/)
      .map(Number);

    switch (cmd) {
      case "M": // absolute moveto
        cx = args[0];
        cy = args[1];
        coords.push([cx, cy]);
        break;
      case "m": // relative moveto
        cx += args[0];
        cy += args[1];
        coords.push([cx, cy]);
        break;
      case "L": // absolute lineto
        cx = args[0];
        cy = args[1];
        coords.push([cx, cy]);
        break;
      case "l": // relative lineto
        cx += args[0];
        cy += args[1];
        coords.push([cx, cy]);
        break;
      case "H": // absolute horizontal lineto
        cx = args[0];
        coords.push([cx, cy]);
        break;
      case "h": // relative horizontal lineto
        cx += args[0];
        coords.push([cx, cy]);
        break;
      case "V": // absolute vertical lineto
        cy = args[0];
        coords.push([cx, cy]);
        break;
      case "v": // relative vertical lineto
        cy += args[0];
        coords.push([cx, cy]);
        break;
      case "Z": // closepath (no coordinate needed)
      case "z":
        break;
    }
  }

  return coords;
}

/** Parses a <rect> or <path> element into a MapItem. */
function parseElement(el: Element): MapItem {
  const { name, type } = extractNameAndType(el);

  const tag = el.tagName.toLowerCase();
  const coordinates = tag === "rect" ? rectToCoordinates(el) : pathToCoordinates(el);

  return { name, type, coordinates };
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
      ? Array.from(articlesGroup.querySelectorAll("rect, path")).map(parseElement)
      : [];

    const booths: MapItem[] = boothsGroup
      ? Array.from(boothsGroup.querySelectorAll("rect, path")).map(parseElement)
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
