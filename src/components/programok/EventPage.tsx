import { Box, Stack, Typography } from "@mui/material";
import { SponsorFragment } from "@/actions/sponsors/sponsors.generated";
import FormattedContent from "../FormattedContent";
import PageContainer from "../layouts/PageContainer";
import SponsorCard from "../sponsor/SponsorCard";
import GradientTitle from "../ui/GradientTitle";
import Starform from "../ui/Starform";
import EventImage from "./EventImage";

type MetadataCompetitor = {
  id: string;
  name: string;
  school?: string;
  teacher?: string;
};

interface EventPageProps {
  title: string;
  eventInfo: string;
  generalInfo: string;
  image: string;
  location: string;
  sponsors: SponsorFragment[];
  metadata?: string;
}

const EventPage = ({
  title,
  eventInfo,
  generalInfo,
  image,
  sponsors,
  metadata = "{}",
}: EventPageProps) => {
  const competitors: MetadataCompetitor[] = [];

  try {
    const parsedMetadata = JSON.parse(metadata);

    if (parsedMetadata && Array.isArray(parsedMetadata.competitors)) {
      parsedMetadata.competitors.forEach((competitor: MetadataCompetitor) => {
        competitors.push({
          ...competitor,
          school:
            competitor.school === "?"
              ? undefined
              : competitor.school === "-"
                ? undefined
                : competitor.school,
          teacher:
            competitor.teacher === "?"
              ? undefined
              : competitor.teacher === "-"
                ? undefined
                : competitor.teacher,
        });
      });
    }
  } catch {}

  return (
    <>
      <GradientTitle sx={{ mb: 0 }}>{title}</GradientTitle>
      <EventImage title={title} image={image} />
      <FormattedContent variant="h2" sx={{ color: "white", textAlign: "center", mt: 1 }}>
        {"szakmai tanulmányi verseny".toUpperCase()}
      </FormattedContent>

      <PageContainer sx={{ position: "relative" }}>
        <Starform />
        <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
          SZAKMA<span style={{ fontWeight: "300" }}>LEÍRÁS</span>
        </Typography>
        <Stack spacing={2} sx={{ flex: 1, pb: 3 }}>
          <FormattedContent sx={{ color: "white" }}>{eventInfo}</FormattedContent>

          <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
            VERSENY <span style={{ fontWeight: "300" }}>INFORMÁCIÓK</span>
          </Typography>
          <FormattedContent sx={{ color: "white" }}>{generalInfo}</FormattedContent>

          {competitors.length > 0 && (
            <>
              <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
                VERSENYZŐK
              </Typography>
              <Stack spacing={2}>
                {competitors
                  .sort((a, z) => a.name.localeCompare(z.name, "hu-HU"))
                  .map((competitor) => (
                    <Stack
                      key={competitor.id}
                      sx={{
                        borderRadius: 1,
                        bgcolor: "primary.light",
                        p: 1.5,
                        color: "primary.contrastText",
                        gap: 1,
                      }}
                    >
                      <Typography variant="h3">{competitor.name}</Typography>
                      {competitor.school && (
                        <Typography variant="body2">Iskola: {competitor.school}</Typography>
                      )}
                      {competitor.teacher && (
                        <Typography variant="body2">Felkészítő: {competitor.teacher}</Typography>
                      )}
                    </Stack>
                  ))}
              </Stack>
            </>
          )}

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
