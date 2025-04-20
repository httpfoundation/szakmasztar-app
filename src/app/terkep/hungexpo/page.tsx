import { Metadata } from "next";
import MapPageContainer from "@/components/map/MapPageContainer";
import SvgPanZoom from "@/components/map/SvgPanZoom";
import HungexpoMap from "./_components/hungexpoMap";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hungexpo",
};

const HungexpoMapPage = () => {
  return (
    <>
      <MapPageContainer title="Hungexpo térkép">
        <SvgPanZoom defaultPosition={{ x: 786.49 / 2, y: 414.59 * 1.3, zoom: 0.5 }}>
          <HungexpoMap />
        </SvgPanZoom>
      </MapPageContainer>
    </>
  );
};

export default HungexpoMapPage;
