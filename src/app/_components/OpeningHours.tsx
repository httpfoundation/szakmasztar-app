import { Typography } from "@mui/material";
import LinkButton from "@/components/common/LinkButton";
import TwoLinesInfo from "@/components/common/TwoLinesInfo";
import SectionContainer from "@/components/layouts/SectionContainer";
import SzakmaSztarSymbol from "@/components/ui/SzakmaSztarSymbol";

const OpeningHours = () => {
  return (
    <SectionContainer sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <SzakmaSztarSymbol style={{ opacity: 0.1 }} />

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
      <TwoLinesInfo primaryText="2026. március 26. (csütörtök)" secondaryText="10:00 - 16:00" />
      <TwoLinesInfo primaryText="2026. március 27. (péntek)" secondaryText="08:00 - 16:00" />

      <LinkButton
        href="/utemterv"
        direction="forward"
        startIcon={null}
        sx={{
          px: 2,
          py: 1,
          mt: 0.5,
          bgcolor: "primary.light",
          fontSize: 12,
          fontWeight: 600,
          alignSelf: "center",
        }}
      >
        Programnaptár megtekintése
      </LinkButton>
    </SectionContainer>
  );
};

export default OpeningHours;
