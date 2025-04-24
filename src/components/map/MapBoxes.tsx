"use client";

import { useEffect, useState } from "react";
import { EventMapItem } from "@/actions/articles/articles";
import { fitTextToBox } from "@/lib/utils";
import { nakMain, osztvMain, otherMain, wshuMain } from "@/themes/theme";
import SvgLink from "./SvgLink";

interface MapBoxesProps {
  boxItems: EventMapItem[];
}

const MapBoxes = ({ boxItems }: MapBoxesProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return boxItems
    .filter((x) => !!x.stand)
    .map((box, index) => (
      <SvgLink key={index} href={box.href}>
        <g transform={`translate(${box.stand.x}, ${box.stand.y})`}>
          <rect
            width={box.stand.width}
            height={box.stand.height}
            fill={
              box.href.includes("wshu")
                ? wshuMain
                : box.href.includes("osztv")
                  ? osztvMain
                  : box.href.includes("nak")
                    ? nakMain
                    : otherMain
            }
            stroke={"white"}
            strokeWidth="2"
          />

          <foreignObject x="0" y="0" width={box.stand.width} height={box.stand.height}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize:
                  (box.stand.fontSize ??
                    fitTextToBox(box.text, box.stand.width, box.stand.height)) *
                  (box.href.includes("nak") ? 1 : 0.6),
                fontFamily: "var(--font-montserrat), Arial, sans-serif",
                fontWeight: "500",
                color: "#fff",
                wordWrap: "break-word",
                overflow: "hidden",
                padding: "20px",
                lineHeight: "1.1",
                // transform: box.rotate ? `rotate(${(box.rotate || 0) * -1}deg)` : undefined,
                transformOrigin: "center",
              }}
            >
              {box.text}
            </div>
          </foreignObject>
        </g>
      </SvgLink>
    ));
};

export default MapBoxes;
