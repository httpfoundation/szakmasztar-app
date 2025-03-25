import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import eventSchedule from "@/assets/eventSchedule.json";

const EventCalendar = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {eventSchedule.map((day, index) => (
        <Paper key={index} sx={{ p: 3, mb: 3, bgcolor: "rgba(255, 255, 255, 0.8)" }}>
          <Typography variant="h5" gutterBottom>
            {day.title}
          </Typography>
          <Grid container spacing={2}>
            {day.events.map((event, eventIndex) => (
              <Grid item xs={12} md={6} key={eventIndex}>
                <Paper sx={{ p: 2, height: "100%", bgcolor: "rgba(255, 255, 255, 0.8)" }}>
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
                    <Button
                      component={Link}
                      href={event.locationSlug}
                      size="small"
                      startIcon={<LocationOnIcon />}
                      variant="outlined"
                    >
                      {event.location}
                    </Button>
                    {event.eventSlugs && (
                      <Button
                        component={Link}
                        href={event.eventSlugs}
                        size="small"
                        startIcon={<InfoIcon />}
                        variant="outlined"
                      >
                        Információ
                      </Button>
                    )}
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
