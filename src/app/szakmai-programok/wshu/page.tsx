import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

const WshuEventsPage = async () => {
  const events = await getEventsArticlesByCategory("wshu");
  const title = "WorldSkills Hungary programok";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer>
        <EventCards events={events} sectorId="wshu" />
      </PageContainer>
    </>
  );
};

export default WshuEventsPage;
