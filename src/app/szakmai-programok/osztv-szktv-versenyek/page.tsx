import { getEventsArticlesByCategory } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

const OsztvSzktvSkills = async () => {
  const events = await getEventsArticlesByCategory("osztvszktv");
  const title = "OSZTV és SZKTV versenyek";

  return (
    <>
      <GradientTitle>{title}</GradientTitle>
      <PageContainer>
        <EventCards events={events} sectorId="osztvszktv" />
      </PageContainer>
    </>
  );
};

export default OsztvSzktvSkills;
