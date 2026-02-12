import { Metadata } from "next";
import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 7200;

export const metadata: Metadata = {
  title: "A Nemzeti Agrárgazdasági Kamara szakmai bemutatói, agrár szabadulószoba",
};

const NakEventsPage = async () => {
  const events = await getEventsArticlesByCategory("nak");
  const title = "A Nemzeti Agrárgazdasági Kamara szakmai bemutatói, agrár szabadulószoba";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer sx={{ position: "relative", pb: 5 }}>
        <Starform />
        <EventCards events={events} permutatingColors />
      </PageContainer>
    </>
  );
};

export default NakEventsPage;
