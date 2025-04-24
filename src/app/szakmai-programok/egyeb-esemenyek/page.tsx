import { Metadata } from "next";
import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Interaktív szakmai programok és bemutatók",
};

const OtherEventsPage = async () => {
  const interactiveEvents = await getEventsArticlesByCategory("interaktiv");
  const otherEvents = await getEventsArticlesByCategory("egyeb");
  const events = [...interactiveEvents, ...otherEvents];
  const title = "Interaktív szakmai programok és bemutatók";

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

export default OtherEventsPage;
