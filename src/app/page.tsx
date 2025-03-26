import { Box } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import { getSponsors } from "@/actions/sponsors/sponsors";
import heroImage from "@/assets/images/hero.png";
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
      <HeroSection
        image={heroImage}
        alt={currentCompetition.name}
        title={currentCompetition.name}
        lead={currentCompetition.article.lead}
      />
      <JumpCodeSection />

      <ImageButtonSection />

      <OpeningHours />
      <SponsorSection sponsors={sponsors} />
    </Box>
  );
};

export default IndexPage;

