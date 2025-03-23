import Image from "next/image";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { SponsorFragment } from "@/actions/sponsors/sponsors.generated";
import PageTitle from "../common/PageTitle";
import FormattedContent from "../FormattedContent";
import PageContainer from "../layouts/PageContainer";
import SponsorCard from "../sponsor/SponsorCard";

interface EventPageProps {
  title: string;
  eventInfo: string;
  generalInfo: string;
  image: string;
  location: string;
  sponsors: SponsorFragment[];
}

const EventPage = ({
  title,
  eventInfo,
  generalInfo,
  image,
  location,
  sponsors,
}: EventPageProps) => {
  return (
    <PageContainer>
      <PageTitle>{title} SZKTV döntő</PageTitle>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ p: 0, display: "flex", flexDirection: "column", flex: 1 }}>
          <Box sx={{ position: "relative", width: "100%", height: "200px" }}>
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
          <Stack spacing={2} sx={{ p: 2, flex: 1 }}>
            <Typography variant="h6" color="primary">
              {location}
            </Typography>

            <FormattedContent>{eventInfo}</FormattedContent>
            <FormattedContent>{generalInfo}</FormattedContent>
            {sponsors.length > 0 && (
              <Box sx={{ mt: "auto" }}>
                <Typography variant="subtitle2" gutterBottom>
                  Szponzorok:
                </Typography>
                {sponsors.map((sponsor, index) => (
                  <SponsorCard sponsor={sponsor} key={index} />
                ))}
              </Box>
            )}
          </Stack>
        </CardContent>
      </Card>
    </PageContainer>
  );
};

export default EventPage;
