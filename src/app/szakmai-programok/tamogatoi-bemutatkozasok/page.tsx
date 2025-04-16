import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

const TamogatoiBemutatkozasokPage = async () => {
  const events = await getEventsArticlesByCategory("tamogatoibemutatkozasok");
  const title = "Támogatóink bemutatkozásai";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer>
        <EventCards events={events} sectorId="tamogatoibemutatkozasok" />
      </PageContainer>
    </>
  );
};

export default TamogatoiBemutatkozasokPage;
