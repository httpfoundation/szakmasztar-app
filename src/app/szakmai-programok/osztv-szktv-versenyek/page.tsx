import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

const OsztvSzktvSkills = async () => {
  const events = await getEventsArticlesByCategory("osztvszktv");
  const title = "OSZTV és SZKTV versenyek";

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer>
        <EventCards events={events} sectorId="osztvszktv" />
      </PageContainer>
    </>
  );
};

export default OsztvSzktvSkills;
