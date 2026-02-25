import PageContainer from "@/components/layouts/PageContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import Starform from "@/components/ui/Starform";
import SzakmasztarQuestionnaire from "./SzakmasztarQuestionnaire";

const SzakmasztarKerdoivPage = () => {
  return (
    <>
      <QuestionTitle
        title="Szakma Sztár Fesztivál kérdőív"
        description="Több, mint egy verseny - Fedezd fel a szakmák világát a Szakma Sztár Fesztiválon!"
      />

      <PageContainer sx={{ position: "relative", pb: 4 }}>
        <Starform />
        <SzakmasztarQuestionnaire />
      </PageContainer>
    </>
  );
};

export default SzakmasztarKerdoivPage;
