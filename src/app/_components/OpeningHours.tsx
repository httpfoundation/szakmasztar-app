import { Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";

const OpeningHours = () => {
  return (
    <SectionContainer sx={{ position: "relative", pt: 1 }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          color: "primary.contrastText",
          textAlign: "center",
          fontSize: 18,
          textTransform: "uppercase",
        }}
      >
        Nyitvatartás
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 1,
          color: "primary.contrastText",
          fontWeight: "500",
          textAlign: "center",
          bgcolor: "#71376A40",
          px: 2,
          py: 1,
          borderRadius: 1,
          borderLeft: "6px solid #ffffff10",
          borderRight: "6px solid transparent",
        }}
      >
        2025. 04. 28. (hétfő)
        <Typography sx={{ fontWeight: "700", color: "success.main" }}>11:00 - 16:00</Typography>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "primary.contrastText",
          fontWeight: "500",
          textAlign: "center",
          bgcolor: "#71376A40",
          px: 2,
          py: 1,
          borderRadius: 1,
          borderLeft: "6px solid #ffffff10",
          borderRight: "6px solid transparent",
        }}
      >
        2025. 04. 29. (kedd)
        <Typography sx={{ fontWeight: "700", color: "success.main" }}>10:00 - 16:00</Typography>
      </Typography>
    </SectionContainer>
  );
};

export default OpeningHours;
