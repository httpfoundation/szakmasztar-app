import { Stack, Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";
import SponsorCard from "@/components/sponsor/SponsorCard";
import { Sponsor } from "@/types.generated";

type SponsorSectionProps = {
  sponsors: Sponsor[];
};

export default function SponsorSection({ sponsors }: SponsorSectionProps) {
  return (
    <SectionContainer sx={{ pt: 0, mt: 1, mb: 4 }}>
      <Typography
        variant="h2"
        sx={{
          mb: 2,
          color: "primary.contrastText",
          fontSize: 18,
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        A rendezvény támogatói
      </Typography>
      <Stack sx={{ display: "grid", gridTemplateColumns: { xs: "repeat(2,1fr)" }, gap: 1.5 }}>
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </Stack>
    </SectionContainer>
  );
}
