import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import eventSchedule from "@/assets/eventSchedule.json";
import SectionContainer from "../layouts/SectionContainer";
import LinkChip from "../ui/LinkChip";

const EventCalendar = () => {
  return (
    <Box sx={{ position: "relative", mb: 5 }}>
      {eventSchedule.map((day, index) => (
        <Paper
          key={index}
          sx={{ p: 2, mt: 3, mb: 2, bgcolor: "#451F48" }}
          style={{ borderRadius: 0, boxShadow: "none" }}
        >
          <SectionContainer sx={{ p: 0 }} padding={0}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
              <CalendarMonthIcon sx={{ mt: -0.35 }} />
              <Typography variant="h2" sx={{ fontSize: 20, color: "#fff", fontWeight: 700 }}>
                {day.title}
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {day.events.map((event, eventIndex) => (
                <Grid item xs={12} md={6} key={eventIndex}>
                  <Paper
                    sx={{
                      height: "100%",
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    style={{
                      boxShadow: "none",
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        bgcolor: "#D9D9D9",
                        color: "primary.main",
                        px: 1.5,
                        py: 1,
                        flexGrow: 1,
                      }}
                    >
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <AccessTimeFilledIcon fontSize="small" />
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" }}
                        >
                          {new Date(event.startTime).toLocaleTimeString("hu-HU", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          -&nbsp;
                          {new Date(event.endTime).toLocaleTimeString("hu-HU", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </Typography>
                      </Stack>

                      <Typography variant="h6" align="right" fontWeight={600}>
                        {event.title}
                      </Typography>
                    </Stack>

                    <Box sx={{ display: "flex", gap: 2, mt: 1.5, px: 1.5, pb: 1.5 }}>
                      {event.eventSlugs && (
                        <LinkChip href={event.eventSlugs} icon={<InfoIcon />}>
                          Információ
                        </LinkChip>
                      )}

                      <LinkChip href={event.locationSlug} icon={<LocationOnIcon />}>
                        {event.location}
                      </LinkChip>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </SectionContainer>
        </Paper>
      ))}
    </Box>
  );
};

export default EventCalendar;
