import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

const WshuEventsPage = async () => {
  const events = await getEventsArticlesByCategory("wshu");
  const title = "WorldSkills Hungary programok";

  return (
    <>
      <GradientTitle>{title}</GradientTitle>
      <PageContainer>
        <EventCards events={events} sectorId="wshu" />
      </PageContainer>
    </>
  );
};

export default WshuEventsPage;
