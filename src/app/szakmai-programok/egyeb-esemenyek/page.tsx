import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

const OtherEventsPage = async () => {
  const events = await getEventsArticlesByCategory("egyeb");
  const title = "Egyéb események";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer>
        <EventCards events={events} sectorId="egyeb" />
      </PageContainer>
    </>
  );
};

export default OtherEventsPage;
