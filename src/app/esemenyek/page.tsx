import { Typography } from "@mui/material";
import PageContainer from "@/components/layouts/PageContainer";
import EventCategories from "@/components/programok/EventCategories";
import GradientTitle from "@/components/ui/GradientTitle";
import Starform from "@/components/ui/Starform";

export const revalidate = 3600;

const EventsPage = async () => {
  return (
    <>
      <GradientTitle>Események</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <Typography variant="body2" sx={{ color: "primary.contrastText", fontWeight: 500 }}>
          A rendezvény helyet ad a szakmai tanulmányi versenyek döntőinek, a WorldSkills Hungary
          versenyeinek, szakmabemutatóknak, a támogatói bemutatkozásoknak és más pályaválasztást
          segítő eseménynek egyaránt.
        </Typography>
        <EventCategories />
      </PageContainer>
    </>
  );
};

export default EventsPage;
