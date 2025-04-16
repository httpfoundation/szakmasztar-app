import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import EventCategories from "@/components/programok/EventCategories";
import Starform from "@/components/ui/Starform";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

const EventsPage = () => {
  return (
    <>
      <YellowTitle>Szakmai programok</YellowTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <FormattedContent variant="body2">
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
