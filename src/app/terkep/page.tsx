import { Map as MapIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import PageContainer from "@/components/layouts/PageContainer";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

const MapPage = async () => {
  return (
    <>
      <YellowTitle>Térkép</YellowTitle>

      <PageContainer>
        <Stack direction="column" spacing={2}>
          <ImageButton href="/terkep/hungexpo" icon={<MapIcon />} text="Hungexpo áttekintő tékép" />
          <ImageButton
            href="/terkep/a-pavilon"
            icon={<MapIcon />}
            text="Az A pavilon térképe (szakmai tanulmányi versenyek és WorldSkills Hungary versenyek)"
          />
          <ImageButton
            href="/terkep/d-pavilon"
            icon={<MapIcon />}
            text="A D pavilon térképe (az agrár terület szakmai tanulmányi versenyei)"
          />
        </Stack>
      </PageContainer>
    </>
  );
};

export default MapPage;
