import { Metadata } from "next";
import PageContainer from "@/components/layouts/PageContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import Kompetencia from "./_components/Kompetencia";

export const metadata: Metadata = {
  title: "Kompetencia kérdőív",
};

const KompetenciaKerdoivPage = () => {
  return (
    <PageContainer sx={{ py: { xs: 1, sm: 3, md: 4 }, position: "relative" }}>
      <QuestionTitle
        title="Kompetencia"
        description="Az alábbi kérdőív segít Neked, hogy minél jobban megismerhesd erősségeidet, azokat a területeket, amelyekben kiemelkedően ügyes vagy. Jelöld be mindegyik kijelentésnél azt a számot, amelyik legjobban kifejezi válaszodat!"
      />

      <Kompetencia />
    </PageContainer>
  );
};

export default KompetenciaKerdoivPage;
