import { Metadata } from "next";
import { getMapItems } from "@/actions/articles/articles";
import MapPageContainer from "@/components/map/MapPageContainer";
import SvgPanZoom from "@/components/map/SvgPanZoom";
import { getMapDefaultPosition } from "@/lib/utils";
import DPavilonMap from "./_components/dPavilonMap";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "D Pavilon térképe",
};

interface DPavilonMapPageProps {
  searchParams: Promise<{ zoomTo?: string }>;
}

const DPavilonMapPage = async ({ searchParams }: DPavilonMapPageProps) => {
  const params = await searchParams;
  const boxItems = (await getMapItems()).filter((x) => x.mapId === "d-pavilon-map");

  const defaultPosition = getMapDefaultPosition(params.zoomTo, boxItems, 3475, 3598);

  return (
    <MapPageContainer title="D pavilon térképe">
      <SvgPanZoom defaultPosition={defaultPosition}>
        <DPavilonMap boxItems={boxItems} />
      </SvgPanZoom>
    </MapPageContainer>
  );
};

export default DPavilonMapPage;
