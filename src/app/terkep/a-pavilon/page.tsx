import { getMapItems } from "@/actions/articles/articles";
import MapPageContainer from "@/components/map/MapPageContainer";
import SvgPanZoom from "@/components/map/SvgPanZoom";
import { getMapDefaultPosition } from "@/lib/utils";
import APavilonMap from "./_components/aPavilonMap";

export const revalidate = 3600;

interface APavilonMapPageProps {
  searchParams: Promise<{ zoomTo?: string }>;
}

const APavilonMapPage = async ({ searchParams }: APavilonMapPageProps) => {
  const params = await searchParams;
  const boxItems = (await getMapItems()).filter((x) => x.mapId === "a-pavilon-map");

  const defaultPosition = getMapDefaultPosition(params.zoomTo, boxItems, 3859, 2079 * 2.5);

  return (
    <MapPageContainer title="A pavilon térképe">
      <SvgPanZoom defaultPosition={defaultPosition}>
        <APavilonMap boxItems={boxItems} />
      </SvgPanZoom>
    </MapPageContainer>
  );
};

export default APavilonMapPage;
