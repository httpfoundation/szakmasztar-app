import { Metadata } from "next";
import SectionContainer from "@/components/layouts/SectionContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import Starform from "@/components/ui/Starform";
import Eredmenyorientacios from "./_comopnents/Eredmenyorientacios";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Eredményorientációs kérdőív",
};

const EredmenyorientaciosKerdoivPage = () => {
  return (
    <>
      <QuestionTitle
        title="Eredményorientációs"
        description="Az alábbi kérdésekre adott válaszaid megmutatják, hogy mennyire fontos számodra a jó iskolai eredmények elérése. Ha fontos Neked, hogy jól tanulj, akkor az segít abban, hogy jó eredményeket érj el. Ha viszont egyáltalán nem fontos számodra a teljesítmény, akkor unatkozva tanulsz, és ez alacsonyabb osztályzatot eredményezhet."
      />

      <SectionContainer sx={{ position: "relative" }}>
        <Starform />
        <Eredmenyorientacios />
      </SectionContainer>
    </>
  );
};

export default EredmenyorientaciosKerdoivPage;
