import { Box, Stack } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import { getSponsors } from "@/actions/sponsors/sponsors";
import heroImage from "@/assets/images/hero.png";
import HeroImage from "./_components/HeroImage";
import HeroSection from "./_components/HeroSection";
import ImageButtonSection from "./_components/ImageButtonSection";
import JumpCodeSection from "./_components/JumpCodeSection";
import OpeningHours from "./_components/OpeningHours";
import SponsorSection from "./_components/SponsorSection";

export const revalidate = 3600;

const IndexPage = async () => {
  const currentCompetition = await getCurrentCompetition();
  const sponsors = await getSponsors();
  return (
    <Box>
      <HeroImage image={heroImage} alt={currentCompetition.name} title={currentCompetition.name} />

      <Stack sx={{ width: "100%", position: "relative" }}>
        <HeroSection />
        <ImageButtonSection />
        <JumpCodeSection />
        <OpeningHours />
        <SponsorSection sponsors={sponsors} />
      </Stack>
    </Box>
  );
};

export default IndexPage;
