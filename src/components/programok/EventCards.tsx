import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { GetCategoryQuery } from "@/actions/categories/categories.generated";

type ArticleItem = NonNullable<GetCategoryQuery["category"]>["items"][number];

interface EventCardsProps {
  events: ArticleItem[];
  sectorId: string;
}

const EventCards = ({ events, sectorId }: EventCardsProps) => {
  const getEventType = (slug: string) => {
    let eventType = "";
    const slugParts = slug.split("-");
    if (slugParts.length < 2) return "";
    switch (slugParts[0]) {
      case "wshu":
        eventType = "WorldSkills Hungary";
        break;
      case "nak":
        eventType = "NAK";
        break;
      case "ostvszktv":
        eventType = "Szakmai tanulmányi verseny";
        break;
      case "other":
        eventType = "";
        break;
      default:
        eventType = "";
        break;
    }
    return eventType;
  };
  const getEventForm = (slug: string) => {
    let eventType = "";
    const slugParts = slug.split("-");
    if (slugParts.length < 2) return "";
    switch (slugParts[1]) {
      case "szakmabemutato":
        eventType = "szakmabemutató";
        break;
      case "verseny":
        eventType = "verseny";
        break;
      default:
        eventType = "";
        break;
    }
    return eventType;
  };
  return (
    <Grid container spacing={2}>
      {events.map(
        (event, eventIndex) =>
          event.__typename === "Article" && (
            <Grid item xs={12} md={6} key={eventIndex}>
              <Paper
                sx={{
                  p: 2,
                  height: "100%",
                  bgcolor: "primary.light",
                  color: "primary.contrastText",
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ mt: 1, mb: 2 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {`${getEventType(event.slug)} ${getEventForm(event.slug)}`}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                  <Button
                    href={`/szakmai-programok/${sectorId}/${event.slug}`}
                    size="small"
                    startIcon={<InfoIcon />}
                    variant="contained"
                    color="success"
                  >
                    Információ
                  </Button>
                  <Button
                    href={"/terkep/hungexpo"}
                    size="small"
                    startIcon={<LocationOnIcon />}
                    variant="outlined"
                    color="info"
                  >
                    TODO
                  </Button>
                </Box>
              </Paper>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default EventCards;
