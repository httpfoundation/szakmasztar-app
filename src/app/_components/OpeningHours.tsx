import { Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";

const OpeningHours = () => {
  return (
    <SectionContainer sx={{ position: "relative" }}>
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
        Nyitva tartás:
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: "success.main",
          fontWeight: "600",
          textAlign: "center",
          bgcolor: "#71376A30",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        2025. 04. 28. (hétfő): 11:00 - 16:00
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: "success.main",
          fontWeight: "600",
          textAlign: "center",
          bgcolor: "#71376A30",
          px: 2,
          py: 1,
          borderRadius: 1,
        }}
      >
        2025. 04. 29. (kedd): 10:00 - 16:00
      </Typography>
    </SectionContainer>
  );
};

export default OpeningHours;
