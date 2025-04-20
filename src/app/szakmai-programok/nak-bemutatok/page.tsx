import { Metadata } from "next";
import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Nemzeti Agrárkamara szakmai események",
};

const NakEventsPage = async () => {
  const events = await getEventsArticlesByCategory("nak");
  const title = "Nemzeti Agrárkamara szakmai események";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <EventCards events={events} />
      </PageContainer>
    </>
  );
};

export default NakEventsPage;
