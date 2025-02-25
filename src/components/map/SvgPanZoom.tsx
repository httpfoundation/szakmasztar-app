"use client";

import { ReactElement, useEffect, useRef } from "react";
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
  const ref = useRef<UncontrolledReactSVGPanZoom>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setPointOnViewerCenter(
        defaultPosition.x,
        defaultPosition.y,
        defaultPosition.zoom
      );
    }
  }, [defaultPosition.x, defaultPosition.y, defaultPosition.zoom]);

  return (
    <UncontrolledReactSVGPanZoom
      ref={ref}
      width={1200}
      height={800}
      tool={TOOL_AUTO}
      customMiniature={() => null}
      customToolbar={() => null}
      scaleFactorMin={0.2}
      scaleFactorMax={2}
      detectAutoPan={false}
    >
      {children}
    </UncontrolledReactSVGPanZoom>
  );
};

export default SvgPanZoom;

