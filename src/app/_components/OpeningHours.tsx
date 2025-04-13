import { Typography } from "@mui/material";
import TwoLinesInfo from "@/components/common/TwoLinesInfo";
import SectionContainer from "@/components/layouts/SectionContainer";

const OpeningHours = () => {
  return (
    <SectionContainer>
      <Typography
        variant="h2"
        sx={{
          color: "primary.contrastText",
          textAlign: "center",
          fontSize: 20,
          mb: 1,
        }}
      >
        Nyitvatartás
      </Typography>
      <TwoLinesInfo primaryText="2025. április 28. (hétfő)" secondaryText="10:00 - 16:00" />
      <TwoLinesInfo primaryText="2025. április 29. (kedd)" secondaryText="08:00 - 16:00" />
    </SectionContainer>
  );
};

export default OpeningHours;
