import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, Typography } from "@mui/material";
import { getEventTypeBySlug, parseArticleMetadata } from "@/lib/utils";
import FormattedContent from "../FormattedContent";
import PageContainer from "../layouts/PageContainer";
import LinkChip from "../ui/LinkChip";
import Starform from "../ui/Starform";
import YellowTitle from "../ui/YellowTitle";
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
  const { eventType, eventOwner } = getEventTypeBySlug(slug);
  const { competitors, mapId } = parseArticleMetadata(metadata);

  const eventTypeText = eventType.includes("döntő")
    ? "Verseny"
    : eventType.includes("bemutató")
      ? "Bemutató"
      : "Egyéb program";

  if (eventType === "interaktív program") {
    eventInfo = "";
  }

  return (
    <>
      <YellowTitle sx={{ mb: 0 }}>{title}</YellowTitle>
      <EventImage
        title={title}
        image={image}
        slug={slug}
        leirasBtnText={slug.includes("egyeb") ? "Leírás" : "Szakmaleírás"}
        infoBtnText={`${eventTypeText} információk`}
        hasCompetitors={competitors.length > 0}
        hasDescription={!!eventInfo}
        hasInfo={!!generalInfo}
      />
      <Stack sx={{ width: "100%", position: "relative", bgcolor: "success.main" }}>
        <PageContainer
          sx={{
            flexDirection: "column",
            display: "flex",
            alignItems: "flex-start",
            ml: -1,
            mx: "auto",
          }}
          padding={0.5}
        >
          {!!eventOwner && (
            <Typography
              component="span"
              variant="body1"
              sx={{ whiteSpace: "nowrap", color: "success.contrastText", fontWeight: 500 }}
            >
              {eventOwner.toUpperCase()}
            </Typography>
          )}

          {!!eventType && (
            <Typography
              component="span"
              variant="body2"
              sx={{
                whiteSpace: "nowrap",
                color: "success.contrastText",
                fontWeight: 300,
                fontSize: 12,
              }}
            >
              {eventType.toUpperCase()}
            </Typography>
          )}
        </PageContainer>
      </Stack>
      {!!mapId && (
        <Stack sx={{ width: "100%", position: "relative", bgcolor: "success.dark" }}>
          <PageContainer padding={0.75}>
            <LinkChip
              href={
                mapId === "d-pavilon-map"
                  ? `/terkep/d-pavilon?zoomTo=${slug}`
                  : `/terkep/a-pavilon?zoomTo=${slug}`
              }
              icon={<LocationOnIcon />}
              sx={{ boxShadow: "-1px 2px 4px rgba(0,0,0,.35)" }}
            >
              Mutasd a térképen {mapId === "d-pavilon-map" ? "(D pavilon)" : "(A pavilon)"}
            </LinkChip>
          </PageContainer>
        </Stack>
      )}

      <PageContainer sx={{ position: "relative" }}>
        <Starform />

        <Stack spacing={1} sx={{ flex: 1, pb: 3, position: "relative" }}>
          {competitors.length > 0 && (
            <>
              <Typography
                id="versenyzok"
                variant="h2"
                sx={{ color: "white", fontWeight: "bold", scrollMarginTop: "64px" }}
              >
                VERSENYZŐK
              </Typography>
              <Stack
                spacing={2}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                  gap: 2,
                }}
              >
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
                      <Typography variant="h4">{competitor.name}</Typography>
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

          {!!eventInfo && (
            <>
              <Typography
                id="leiras"
                variant="h2"
                sx={{ color: "white", fontWeight: "bold", scrollMarginTop: "64px", mt: 2 }}
              >
                {slug.includes("egyeb") ? "PROGRAM " : "SZAKMA"}
                <span style={{ fontWeight: "300" }}>LEÍRÁS</span>
              </Typography>
              <FormattedContent sx={{ color: "white", fontWeight: 500 }}>
                {eventInfo}
              </FormattedContent>
            </>
          )}

          {!!generalInfo && (
            <>
              <Typography
                id="info"
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  scrollMarginTop: "64px",
                  mt: 2,
                }}
              >
                {eventTypeText} <span style={{ fontWeight: "300" }}>INFORMÁCIÓK</span>
              </Typography>
              <FormattedContent sx={{ color: "white", fontWeight: 500 }}>
                {generalInfo}
              </FormattedContent>
            </>
          )}
        </Stack>
      </PageContainer>
    </>
  );
};

export default EventPage;
