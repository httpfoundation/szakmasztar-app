import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

const TamogatoiBemutatkozasokPage = async () => {
  const events = await getEventsArticlesByCategory("tamogatoibemutatkozasok");
  const title = "Támogatóink bemutatkozásai";

  return (
    <>
      <GradientTitle>{title}</GradientTitle>
      <PageContainer>
        <EventCards events={events} sectorId="tamogatoibemutatkozasok" />
      </PageContainer>
    </>
  );
};

export default TamogatoiBemutatkozasokPage;
