import { Metadata } from "next";
import PageContainer from "@/components/layouts/PageContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import Starform from "@/components/ui/Starform";
import Kompetencia from "./_components/Kompetencia";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Kompetencia kérdőív",
};

const KompetenciaKerdoivPage = () => {
  return (
    <>
      <QuestionTitle
        title="Kompetencia"
        description="Az alábbi kérdőív segít Neked, hogy minél jobban megismerhesd erősségeidet, azokat a területeket, amelyekben kiemelkedően ügyes vagy. Jelöld be mindegyik kijelentésnél azt a számot, amelyik legjobban kifejezi válaszodat!"
      />

      <PageContainer sx={{ position: "relative", pb: 4 }}>
        <Starform />
        <Kompetencia />
      </PageContainer>
    </>
  );
};

export default KompetenciaKerdoivPage;
