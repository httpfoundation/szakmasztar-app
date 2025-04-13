import { Stack, Typography } from "@mui/material";
import { getEventTypeBySlug, parseArticleMetadata } from "@/lib/utils";
import FormattedContent from "../FormattedContent";
import PageContainer from "../layouts/PageContainer";
import GradientTitle from "../ui/GradientTitle";
import Starform from "../ui/Starform";
import EventImage from "./EventImage";

interface EventPageProps {
  title: string;
  eventInfo: string;
  generalInfo: string;
  image: string;
  metadata?: string;
  slug: string;
}

const EventPage = ({
  title,
  eventInfo,
  generalInfo,
  image,
  metadata = "{}",
  slug,
}: EventPageProps) => {
  const { eventType } = getEventTypeBySlug(slug);
  const { competitors } = parseArticleMetadata(metadata);

  return (
    <>
      <GradientTitle sx={{ mb: 0 }}>{title}</GradientTitle>
      <EventImage title={title} image={image} slug={slug} />

      <PageContainer sx={{ position: "relative" }}>
        <Starform />

        <Stack spacing={2} sx={{ flex: 1, pb: 3 }}>
          <Typography variant="h2" sx={{ color: "white", fontWeight: "bold" }}>
            SZAKMA<span style={{ fontWeight: "300" }}>LEÍRÁS</span>
          </Typography>

          <FormattedContent sx={{ color: "white" }}>{eventInfo}</FormattedContent>

          <Typography
            variant="h2"
            sx={{ color: "white", fontWeight: "bold", textTransform: "uppercase" }}
          >
            {eventType.includes("döntő")
              ? "verseny"
              : eventType.includes("bemutató")
                ? "bemutató"
                : "egyéb program"}{" "}
            <span style={{ fontWeight: "300" }}>INFORMÁCIÓK</span>
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
        </Stack>
      </PageContainer>
    </>
  );
};

export default EventPage;
