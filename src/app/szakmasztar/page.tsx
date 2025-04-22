import { Metadata } from "next";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import FormattedContent from "@/components/FormattedContent";
import SectionContainer from "@/components/layouts/SectionContainer";
import Starform from "@/components/ui/Starform";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Szakma Sztár Fesztivál",
};

const SzakmasztarPage = async () => {
  const currentCompetition = await getCurrentCompetition();

  return (
    <>
      <YellowTitle>Szakma Sztár Fesztivál</YellowTitle>
      <SectionContainer sx={{ position: "relative", flexGrow: 1 }}>
        <Starform style={{ top: "unset", bottom: 0 }} />
        <SzakmaSztarSymbol />

        <FormattedContent fontWeight={500}>{currentCompetition.article.content}</FormattedContent>
      </SectionContainer>
    </>
  );
};

export default SzakmasztarPage;
