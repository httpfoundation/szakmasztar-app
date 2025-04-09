import { Metadata } from "next";
import PageContainer from "@/components/layouts/PageContainer";
import QuestionTitle from "@/components/sections/QuestionTitle";
import IpariErdeklodes from "./_components/IpariErdeklodes";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Iparagi érdeklődés kérdőív",
  description:
    "Válaszd ki azokat az állításokat, amelyek igazak Rád! Az alábbi feladat segít abban, hogy tisztább képet kapj az érdeklődési területeidről.",
};

const IparagiErdeklodesKerdoivPage = () => {
  return (
    <PageContainer sx={{ py: { xs: 1, sm: 3, md: 4 }, position: "relative" }}>
      <QuestionTitle
        title="Iparági érdeklődés"
        description="Válaszd ki azokat az állításokat, amelyek igazak Rád! Az alábbi feladat segít abban, hogy tisztább képet kapj az érdeklődési területeidről."
      />

      <IpariErdeklodes />
    </PageContainer>
  );
};

export default IparagiErdeklodesKerdoivPage;
