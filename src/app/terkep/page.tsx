import { Map as MapIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";
import ImageButton from "@/components/common/ImageButton";
import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

export const revalidate = 3600;

const MapPage = async () => {
  return (
    <>
      <PageContainer>
        <PageTitle icon={<MapIcon />}>Térkép</PageTitle>
        <Stack direction="column" spacing={2}>
          <ImageButton href="/terkep" icon={<MapIcon />} text="Hungexpo áttekintő tékép" />
          <ImageButton
            href="/terkep"
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
