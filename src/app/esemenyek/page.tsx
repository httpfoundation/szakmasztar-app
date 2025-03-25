import { Typography } from "@mui/material";
import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";
import EventCategories from "@/components/programok/EventCategories";

export const revalidate = 3600;

const EventsPage = async () => {
  return (
    <PageContainer>
      <PageTitle>Események</PageTitle>
      <Typography variant="body2" sx={{ mb: 4, color: "primary.contrastText", fontWeight: 500 }}>
        A rendezvény helyet ad a szakmai tanulmányi versenyek döntőinek, a WorldSkills Hungary
        versenyeinek, szakmabemutatóknak, a támogatói bemutatkozásoknak és más pályaválasztást
        segítő eseménynek egyaránt.
      </Typography>
      <EventCategories />
    </PageContainer>
  );
};

export default EventsPage;
