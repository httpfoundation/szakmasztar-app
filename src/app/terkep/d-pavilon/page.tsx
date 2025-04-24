import { Metadata } from "next";
import { Box } from "@mui/material";
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

const legendItems = [
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "nak.main",
        }}
      />
    ),
    text: "A Nemzeti Agrárgazdasági Kamara szakmai bemutatói",
  },
];

const DPavilonMapPage = async ({ searchParams }: DPavilonMapPageProps) => {
  const params = await searchParams;
  const boxItems = (await getMapItems()).filter((x) => x.mapId === "d-pavilon-map");

  const defaultPosition = getMapDefaultPosition(params.zoomTo, boxItems, 3475, 3598);

  return (
    <MapPageContainer title="D pavilon térképe" legendItems={legendItems}>
      <SvgPanZoom defaultPosition={defaultPosition}>
        <DPavilonMap boxItems={boxItems} />
      </SvgPanZoom>
    </MapPageContainer>
  );
};

export default DPavilonMapPage;
