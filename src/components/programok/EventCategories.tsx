import { Box, Stack } from "@mui/material";
import eventCategories from "@/assets/eventCategories.json";
import EventCategoryCard from "./EventCategoryCard";

const EventCategories = () => {
  return (
    <Box sx={{ mt: 2, mb: 4, position: "relative" }}>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 2,
        }}
      >
        {eventCategories.map((category, index) => (
          <EventCategoryCard key={index} category={category} />
        ))}
      </Stack>
    </Box>
  );
};

export default EventCategories;
