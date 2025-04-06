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
