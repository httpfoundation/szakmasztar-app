import { Metadata } from "next";
import { Stack } from "@mui/material";
import { getSponsors } from "@/actions/sponsors/sponsors";
import PageContainer from "@/components/layouts/PageContainer";
import SponsorCard from "@/components/sponsor/SponsorCard";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 7200;

export const metadata: Metadata = {
  title: "Szakmai támogatók",
};

const SponsorsPage = async () => {
  const sponsors = await getSponsors();

  return (
    <>
      <YellowTitle>Szponzorok</YellowTitle>

      <PageContainer sx={{ mb: 3 }}>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(2,1fr)", md: "repeat(3,1fr)" },
            gap: 1.5,
          }}
        >
          {sponsors
            .filter((x) => !!x.image?.url)
            .map((sponsor) => (
              <SponsorCard key={sponsor.id} sponsor={sponsor} />
            ))}
        </Stack>
      </PageContainer>
    </>
  );
};

export default SponsorsPage;
