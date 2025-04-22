import { Metadata } from "next";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import EventCategories from "@/components/programok/EventCategories";
import YellowTitle from "@/components/ui/YellowTitle";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Programok",
};

const EventsPage = () => {
  return (
    <>
      <YellowTitle>Programok</YellowTitle>
      <PageContainer sx={{ position: "relative", mb: 3 }}>
        <FormattedContent variant="body2">
          A rendezvény helyet ad az országos szakmai tanulmányi versenyek döntőinek, a WorldSkills
          Hungary nemzeti döntőknek, szakmai bemutatóknak, az agrár szakmák népszerűsítésének és más
          pályaválasztást segítő eseménynek egyaránt.
        </FormattedContent>
        <EventCategories />
      </PageContainer>
    </>
  );
};

export default EventsPage;
