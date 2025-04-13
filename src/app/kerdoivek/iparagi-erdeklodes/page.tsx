import { Metadata } from "next";
import SectionContainer from "@/components/layouts/SectionContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import Starform from "@/components/ui/Starform";
import IpariErdeklodes from "./_components/IpariErdeklodes";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Iparagi érdeklődés kérdőív",
  description:
    "Válaszd ki azokat az állításokat, amelyek igazak Rád! Az alábbi feladat segít abban, hogy tisztább képet kapj az érdeklődési területeidről.",
};

const IparagiErdeklodesKerdoivPage = () => {
  return (
    <>
      <QuestionTitle
        title="Iparági érdeklődés"
        description="Válaszd ki azokat az állításokat, amelyek igazak Rád! Az alábbi feladat segít abban, hogy tisztább képet kapj az érdeklődési területeidről."
      />

      <SectionContainer sx={{ position: "relative", pb: 4 }}>
        <Starform />
        <IpariErdeklodes />
      </SectionContainer>
    </>
  );
};

export default IparagiErdeklodesKerdoivPage;
