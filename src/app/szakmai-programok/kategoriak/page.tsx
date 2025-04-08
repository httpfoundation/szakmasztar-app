import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import EventCategories from "@/components/programok/EventCategories";
import GradientTitle from "@/components/ui/GradientTitle";
import Starform from "@/components/ui/Starform";

export const revalidate = 3600;

const EventsPage = async () => {
  return (
    <>
      <GradientTitle>Szakmai programok</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <FormattedContent variant="body2" align="left">
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

