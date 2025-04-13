import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ArticleFragment } from "@/actions/articles/articles.generated";

interface EventCardsProps {
  events: ArticleFragment[];
  sectorId: string;
}

const EventCards = ({ events }: EventCardsProps) => {
  const getEventForm = (slug: string) => {
    let eventType = "";
    const slugParts = slug.split("-");
    if (slugParts.length < 2) return "";
    switch (slugParts[1]) {
      case "szakmabemutato":
        eventType = "Szakmabemutató";
        break;
      case "verseny":
        eventType = "Verseny";
        break;
      default:
        eventType = "";
        break;
    }
    return eventType;
  };

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

          return (
            <Grid item xs={12} md={6} key={eventIndex}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  height: "100%",
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                  borderColor: "#fff1",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ mb: 1 }}>
                  {getEventForm(event.slug)}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Button
                    href={`/szakmai-programok/${event.slug}`}
                    size="small"
                    startIcon={<InfoIcon />}
                    variant="contained"
                    color="success"
                  >
                    Információ
                  </Button>

                  {!!mapId && (
                    <Button
                      href={
                        mapId === "d-pavilon-map"
                          ? `/terkep/d-pavilon?zoomTo=${event.slug}`
                          : `/terkep/a-pavilon?zoomTo=${event.slug}`
                      }
                      size="small"
                      startIcon={<LocationOnIcon />}
                      variant="outlined"
                      color="info"
                    >
                      {mapId === "d-pavilon-map" ? "D pavilon" : "A pavilon"}
                    </Button>
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
