import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import eventSchedule from "@/assets/eventSchedule.json";

const EventCalendar = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {eventSchedule.map((day, index) => (
        <Paper key={index} sx={{ p: 2, mb: 3, bgcolor: "#71376A55" }}>
          <Typography variant="h2" sx={{ fontSize: 20, color: "success.main", mb: 2 }}>
            {day.title}
          </Typography>
          <Grid container spacing={1}>
            {day.events.map((event, eventIndex) => (
              <Grid item xs={12} md={6} key={eventIndex}>
                <Paper
                  sx={{
                    p: 2,
                    height: "100%",
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                  }}
                >
                  <Typography variant="body2">
                    {new Date(event.startTime).toLocaleTimeString("hu-HU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    -
                    {new Date(event.endTime).toLocaleTimeString("hu-HU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 1, mb: 2 }}>
                    {event.title}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
                    {event.eventSlugs && (
                      <Button
                        component={Link}
                        href={event.eventSlugs}
                        size="small"
                        startIcon={<InfoIcon />}
                        variant="contained"
                        color="success"
                      >
                        Információ
                      </Button>
                    )}
                    <Button
                      component={Link}
                      href={event.locationSlug}
                      size="small"
                      startIcon={<LocationOnIcon />}
                      variant="outlined"
                      color="info"
                    >
                      {event.location}
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default EventCalendar;

