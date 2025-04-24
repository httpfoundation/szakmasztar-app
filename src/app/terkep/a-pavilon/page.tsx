import { Metadata } from "next";
import { Box } from "@mui/material";
import { getMapItems } from "@/actions/articles/articles";
import MapPageContainer from "@/components/map/MapPageContainer";
import SvgPanZoom from "@/components/map/SvgPanZoom";
import { getMapDefaultPosition } from "@/lib/utils";
import APavilonMap from "./_components/aPavilonMap";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "A Pavilon térképe",
};

interface APavilonMapPageProps {
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
          bgcolor: "wshu.main",
        }}
      />
    ),
    text: "WorldSkills Shanghai 2026 nemzeti döntők és szakmai bemutatók",
  },
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "osztv.main",
        }}
      />
    ),
    text: "OSZTV és SZKTV döntők, szakmai bemutatók és interaktív programok",
  },
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "other.main",
        }}
      />
    ),
    text: "Egyéb: Szakmai támogatóink, az esemény szponzorai",
  },
];

const APavilonMapPage = async ({ searchParams }: APavilonMapPageProps) => {
  const params = await searchParams;
  const boxItems = (await getMapItems()).filter((x) => x.mapId === "a-pavilon-map");

  const defaultPosition = getMapDefaultPosition(params.zoomTo, boxItems, 3859, 2079);

  return (
    <MapPageContainer title="A pavilon térképe" legendItems={legendItems}>
      <SvgPanZoom defaultPosition={defaultPosition}>
        <APavilonMap boxItems={boxItems} />
      </SvgPanZoom>
    </MapPageContainer>
  );
};

export default APavilonMapPage;
