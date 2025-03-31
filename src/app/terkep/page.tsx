import { Map as MapIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import PageContainer from "@/components/layouts/PageContainer";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

const MapPage = async () => {
  return (
    <>
      <GradientTitle>Térkép</GradientTitle>

      <PageContainer>
        <Stack direction="column" spacing={2}>
          <ImageButton href="/terkep/hungexpo" icon={<MapIcon />} text="Hungexpo áttekintő tékép" />
          <ImageButton
            href="/terkep/a-pavilon"
            icon={<MapIcon />}
            text="Az A pavilon térképe (szakmai tanulmányi versenyek és WorldSkills Hungary versenyek)"
          />
          <ImageButton
            href="/terkep"
            icon={<MapIcon />}
            text="A D pavilon térképe (az agrár terület szakmai tanulmányi versenyei)"
          />
        </Stack>
      </PageContainer>
    </>
  );
};

export default MapPage;

