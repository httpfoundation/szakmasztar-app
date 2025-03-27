import { Box, Stack, Typography } from "@mui/material";
import { SponsorFragment } from "@/actions/sponsors/sponsors.generated";
import FormattedContent from "../FormattedContent";
import PageContainer from "../layouts/PageContainer";
import SponsorCard from "../sponsor/SponsorCard";
import Starform from "../ui/Starform";
import EventImage from "./EventImage";

interface EventPageProps {
  title: string;
  eventInfo: string;
  generalInfo: string;
  image: string;
  location: string;
  sponsors: SponsorFragment[];
}

const EventPage = ({ title, eventInfo, generalInfo, image, sponsors }: EventPageProps) => {
  return (
    <>
      <EventImage title={title} image={image} />

      <PageContainer sx={{ position: "relative" }}>
        <Starform />

        <Stack spacing={2} sx={{ flex: 1, pb: 3 }}>
          <FormattedContent sx={{ color: "white" }}>{eventInfo}</FormattedContent>

          <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
            VERSENY <span style={{ fontWeight: "300" }}>INFORMÁCIÓK</span>
          </Typography>
          <FormattedContent sx={{ color: "white" }}>{generalInfo}</FormattedContent>

          {sponsors.length > 0 && (
            <Box sx={{ mt: "auto" }}>
              <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
                SZPONZOROK
              </Typography>
              {sponsors.map((sponsor, index) => (
                <SponsorCard sponsor={sponsor} key={index} />
              ))}
            </Box>
          )}
        </Stack>
      </PageContainer>
    </>
  );
};

export default EventPage;

