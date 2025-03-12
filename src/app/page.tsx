import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Box } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import { getSponsors } from "@/actions/sponsors/sponsors";
import heroImage from "@/assets/images/szakmasztar-2025-1200x800.webp";
import ImageButton from "@/components/common/ImageButton";
import SectionContainer from "@/components/layouts/SectionContainer";
import HeroSection from "./_components/HeroSection";
import JumpCodeSection from "./_components/JumpCodeSection";
import LocationInfo from "./_components/LocationInfo";
import MapSection from "./_components/MapSection";
import OpeningHours from "./_components/OpeningHours";
import SkillSection from "./_components/SkillSection";
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
      <MapSection />
      <LocationInfo />
      <SkillSection />
      <SectionContainer>
        <ImageButton href="/kerdoivek" icon={<QuestionMarkIcon />} text="Kérdőívek" />
      </SectionContainer>
      <OpeningHours />
      <SponsorSection sponsors={sponsors} />
    </Box>
  );
};

export default IndexPage;
