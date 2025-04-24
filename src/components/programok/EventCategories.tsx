import { Stack } from "@mui/material";
import eventCategories from "@/assets/eventCategories.json";
import EventCategoryCard from "./EventCategoryCard";

const EventCategories = () => {
  return (
    <>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          },
          gap: 1.5,
          mb: 1.5,
          mt: 2,
          position: "relative",
        }}
      >
        {eventCategories.map((category, index) => (
          <EventCategoryCard key={index} category={category} />
        ))}
      </Stack>
    </>
  );
};

export default EventCategories;
