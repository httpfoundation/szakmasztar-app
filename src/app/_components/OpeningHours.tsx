import { Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";

const OpeningHours = () => {
  return (
    <SectionContainer>
      <Typography variant="h2" sx={{ mb: 2, color: "primary.contrastText" }}>
        A rendezvény nyitvatartási időpontjai
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "primary.contrastText" }}>
        2025.04.28. (hétfő) 11:00 - 16:00
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "primary.contrastText" }}>
        2025.04.29. (kedd) 10:00 - 16:00
      </Typography>
    </SectionContainer>
  );
};

export default OpeningHours;
