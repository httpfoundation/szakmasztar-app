import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getEventTypeBySlug } from "@/lib/utils";
import LinkChip from "../ui/LinkChip";

interface EventCardsProps {
  events: ArticleFragment[];
  sectorId: string;
}

const EventCards = ({ events }: EventCardsProps) => {
  function getEventMapId(article: ArticleFragment): string | null {
    try {
      const metadata = JSON.parse(article.metadata);
      const mapId = metadata?.mapId;
      return mapId || null;
    } catch {
      return null;
    }
  }

  return (
    <Grid container spacing={1.5} sx={{ mb: 2 }}>
      {events
        .sort((a, z) => a.title.localeCompare(z.title))
        .filter((event) => event.__typename === "Article")
        .map((event, eventIndex) => {
          const mapId = getEventMapId(event);
          const {} = getEventTypeBySlug(event.slug);

          return (
            <Grid item xs={12} md={6} key={eventIndex}>
              <Paper
                variant="outlined"
                sx={{
                  position: "relative",
                  border: 0,
                  py: 2,
                  px: 1.5,
                  height: "100%",
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
                  {event.title}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 1.5 }}>
                  <LinkChip href={`/szakmai-programok/${event.slug}`} icon={<InfoIcon />}>
                    Információ
                  </LinkChip>

                  {!!mapId && (
                    <LinkChip
                      href={
                        mapId === "d-pavilon-map"
                          ? `/terkep/d-pavilon?zoomTo=${event.slug}`
                          : `/terkep/a-pavilon?zoomTo=${event.slug}`
                      }
                      icon={<LocationOnIcon />}
                    >
                      {mapId === "d-pavilon-map" ? "D pavilon" : "A pavilon"}
                    </LinkChip>
                  )}
                </Box>
              </Paper>
            </Grid>
          );
        })}
    </Grid>
  );
};

export default EventCards;
