import { getCurrentCompetition } from "@/actions/competitions/competitions";
import FormattedContent from "@/components/FormattedContent";
import SectionContainer from "@/components/layouts/SectionContainer";
import GradientTitle from "@/components/ui/GradientTitle";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";

export const revalidate = 3600;

const SzakmasztarPage = async () => {
  const currentCompetition = await getCurrentCompetition();

  return (
    <>
      <GradientTitle>Szakma Sztár Fesztivál</GradientTitle>
      <SectionContainer sx={{ position: "relative", flexGrow: 1 }}>
        <Starform style={{ top: "unset", bottom: 0 }} />
        <SzakmaSztarSymbol />

        <FormattedContent fontWeight={500}>{currentCompetition.article.content}</FormattedContent>
      </SectionContainer>
    </>
  );
};

export default SzakmasztarPage;
