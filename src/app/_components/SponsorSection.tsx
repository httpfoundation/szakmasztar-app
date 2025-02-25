import { Grid, Typography } from "@mui/material";
import SectionContainer from "@/components/layouts/SectionContainer";
import SponsorCard from "@/components/sponsor/SponsorCard";
import { Sponsor } from "@/types.generated";

type SponsorSectionProps = {
  sponsors: Sponsor[];
};

export default function SponsorSection({ sponsors }: SponsorSectionProps) {
  return (
    <SectionContainer>
      <Typography variant="h2" sx={{ mb: 2, color: "primary.contrastText" }}>
        A rendezvény támogatói
      </Typography>
      <Grid container spacing={2}>
        {sponsors.map((sponsor) => (
          <Grid item xs={6} sm={6} md={2} key={sponsor.id}>
            <SponsorCard sponsor={sponsor} />
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
