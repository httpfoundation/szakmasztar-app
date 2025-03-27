import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import eventCategories from "@/assets/eventCategories.json";

const EventCategories = () => {
  return (
    <Box sx={{ mt: 2, mb: 4, position: "relative" }}>
      <Grid container spacing={2}>
        {eventCategories.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 2.5, height: "100%", bgcolor: "primary.light" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "primary.contrastText" }}>
                {category.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                paragraph
                sx={{ color: "primary.contrastText" }}
              >
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
                    color="info"
                  >
                    {location.title}
                  </Button>
                ))}
                <Button
                  component={Link}
                  href={`/esemenyek/${category.slug}`}
                  size="small"
                  startIcon={<InfoIcon />}
                  variant="outlined"
                  color="info"
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
