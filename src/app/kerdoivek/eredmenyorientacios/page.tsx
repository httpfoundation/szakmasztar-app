import { Metadata } from "next";
import PageContainer from "@/components/layouts/PageContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import Eredmenyorientacios from "./_comopnents/Eredmenyorientacios";

export const metadata: Metadata = {
  title: "Eredményorientációs kérdőív",
};

const EredmenyorientaciosKerdoivPage = () => {
  return (
    <PageContainer sx={{ py: { xs: 1, sm: 3, md: 4 }, position: "relative" }}>
      <QuestionTitle
        title="Eredményorientációs"
        description="Az alábbi kérdésekre adott válaszaid megmutatják, hogy mennyire fontos számodra a jó iskolai eredmények elérése. Ha fontos Neked, hogy jól tanulj, akkor az segít abban, hogy jó eredményeket érj el. Ha viszont egyáltalán nem fontos számodra a teljesítmény, akkor unatkozva tanulsz, és ez alacsonyabb osztályzatot eredményezhet."
      />

      <Eredmenyorientacios />
    </PageContainer>
  );
};

export default EredmenyorientaciosKerdoivPage;
