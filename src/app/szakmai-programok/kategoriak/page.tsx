import { getCategoryTree } from "@/actions/categories/categories";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import EventCategories from "@/components/programok/EventCategories";
import GradientTitle from "@/components/ui/GradientTitle";
import Starform from "@/components/ui/Starform";

export const revalidate = 3600;

const EventsPage = async () => {
  const eventsTree = await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" });
  console.dir(eventsTree, { depth: 10 });

  return (
    <>
      <GradientTitle>Szakmai programok</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <FormattedContent variant="body1" align="left">
          A rendezvény helyet ad a szakmai tanulmányi versenyek döntőinek, a WorldSkills Hungary
          versenyeinek, szakmabemutatóknak, a támogatói bemutatkozásoknak és más pályaválasztást
          segítő eseménynek egyaránt.
        </FormattedContent>
        <EventCategories />
      </PageContainer>
    </>
  );
};

export default EventsPage;
