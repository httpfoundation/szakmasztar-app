import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getEventTypeBySlug } from "@/lib/utils";
import LinkChip from "../ui/LinkChip";

interface EventCardsProps {
  events: ArticleFragment[];
  permutatingColors?: boolean;
  singleColumn?: boolean;
}

const bgcolors = ["wshu.main", "osztv.main", "primary.light", "nak.main", "other.main"];

const EventCards = ({
  events,
  permutatingColors = false,
  singleColumn = false,
}: EventCardsProps) => {
  function getEventMapId(article: ArticleFragment): string | null {
    try {
      const metadata = JSON.parse(article.metadata);
      const mapId = metadata?.mapId;
      return mapId || null;
    } catch {
      return null;
    }
  }

  function getEventType(article: ArticleFragment): string {
    try {
      const metadata = JSON.parse(article.metadata);
      const eventType = metadata.map?.eventType ?? metadata.eventType;
      return eventType || getEventTypeBySlug(article.slug).eventType;
    } catch {
      return getEventTypeBySlug(article.slug).eventType;
    }
  }

  return (
    <Grid container spacing={1.5} sx={{ mb: 3 }}>
      {events
        .sort((a, z) => a.title.localeCompare(z.title))
        .filter((event) => event.__typename === "Article")
        .map((event, eventIndex) => {
          const mapId = getEventMapId(event);
          const eventType = getEventType(event);
          const hasMapSlug = event.content || event.lead;

          return (
            <Grid item xs={12} md={singleColumn ? 12 : 6} key={eventIndex}>
              <Paper
                variant="outlined"
                sx={{
                  position: "relative",
                  border: 0,
                  py: 2,
                  px: 1.5,
                  height: "100%",
                  bgcolor: permutatingColors
                    ? bgcolors[eventIndex % bgcolors.length]
                    : "primary.light",
                  color: "primary.contrastText",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Link
                  href={!!event.content && !!event.lead ? `/szakmai-programok/${event.slug}` : "#"}
                >
                  <Typography variant="h6" gutterBottom sx={{ mb: 1, color: "white" }}>
                    {event.title}
                  </Typography>
                </Link>
                <Typography variant="body2" sx={{ mb: 1, fontSize: 13 }}>
                  {eventType}
                </Typography>
                <Box sx={{ display: "flex", gap: 2, mt: 1.5 }}>
                  {!!event.content && !!event.lead && (
                    <LinkChip href={`/szakmai-programok/${event.slug}`} icon={<InfoIcon />}>
                      Információ
                    </LinkChip>
                  )}

                  {!!mapId && (
                    <LinkChip
                      href={
                        mapId === "d-pavilon-map"
                          ? `/terkep/d-pavilon?zoomTo=${hasMapSlug ? event.slug : event.title}`
                          : `/terkep/a-pavilon?zoomTo=${hasMapSlug ? event.slug : event.title}`
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
