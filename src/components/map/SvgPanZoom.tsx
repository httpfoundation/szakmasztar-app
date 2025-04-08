"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { TOOL_AUTO, UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";

interface SvgPanZoomProps {
  children: ReactElement;
  defaultPosition: {
    x: number;
    y: number;
    zoom: number;
  };
}

const SvgPanZoom = ({ children, defaultPosition }: SvgPanZoomProps) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<UncontrolledReactSVGPanZoom>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.setPointOnViewerCenter(
        defaultPosition.x,
        defaultPosition.y,
        defaultPosition.zoom
      );
    }
  }, [defaultPosition.x, defaultPosition.y, defaultPosition.zoom]);
  console.log("zoom: ", defaultPosition.zoom);
  return (
    <UncontrolledReactSVGPanZoom
      ref={ref}
      width={1200}
      height={800}
      tool={TOOL_AUTO}
      customMiniature={() => null}
      customToolbar={() => null}
      scaleFactorMin={0.1}
      scaleFactorMax={2}
      detectAutoPan={false}
      background="#350f38"
      style={{ opacity: mounted ? 1 : 0 }}
      scaleFactor={defaultPosition.zoom}
    >
      {children}
    </UncontrolledReactSVGPanZoom>
  );
};

export default SvgPanZoom;
