import { Box, Stack } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import HeroImage from "./_components/HeroImage";
import HeroSection from "./_components/HeroSection";
import ImageButtonSection from "./_components/ImageButtonSection";
import JumpCodeSection from "./_components/JumpCodeSection";
import OpeningHours from "./_components/OpeningHours";
import OrganizerInfo from "./_components/OrganizerInfo";
import OtherImageButtonsSection from "./_components/OtherImageButtonsSection";

export const revalidate = 7200;

const IndexPage = async () => {
  const currentCompetition = await getCurrentCompetition();

  return (
    <Box>
      <HeroImage alt={currentCompetition.name} title={currentCompetition.name} />

      <Stack sx={{ width: "100%", position: "relative" }}>
        <HeroSection />
        {/* <InstallButton /> */}
        <ImageButtonSection />
        <JumpCodeSection />
        <OpeningHours />
        <OtherImageButtonsSection />
        <OrganizerInfo />
      </Stack>
    </Box>
  );
};

export default IndexPage;
