import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

const NakEventsPage = async () => {
  const events = await getEventsArticlesByCategory("nak");
  const title = "Nemzeti Agrárkamara szakmai események";

  return (
    <>
      <GradientTitle>{title}</GradientTitle>
      <PageContainer>
        <EventCards events={events} sectorId="nak" />
      </PageContainer>
    </>
  );
};

export default NakEventsPage;
