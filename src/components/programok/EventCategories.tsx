import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import eventCategories from "@/assets/eventCategories.json";

const EventCategories = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {eventCategories.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 3, height: "100%", bgcolor: "rgba(255, 255, 255, 0.8)" }}>
              <Typography variant="h6" gutterBottom>
                {category.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {category.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {category.locations.map((location, locationIndex) => (
                  <Button
                    key={locationIndex}
                    component={Link}
                    href={location.slug}
                    size="small"
                    startIcon={<LocationOnIcon />}
                    variant="outlined"
                  >
                    {location.title}
                  </Button>
                ))}
                <Button
                  component={Link}
                  href={`/programok/${category.slug}`}
                  size="small"
                  startIcon={<InfoIcon />}
                  variant="outlined"
                >
                  Tudj meg többet!
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventCategories;
