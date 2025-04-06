import { Box, Paper } from "@mui/material";
import EventCategoryCardTitle from "./EventCategoryCardTitle";
import EventCategoryDescription from "./EventCategoryDescription";
import EventLinkButton from "./EventLinkButton";
import LocationLinkButton from "./LocationLinkButton";

interface EventCategoryCardProps {
  category: {
    title: string;
    description: string;
    color: string;
    slug: string;
    locations: Array<{
      title: string;
      slug: string;
    }>;
  };
}

const EventCategoryCard = ({ category }: EventCategoryCardProps) => {
  return (
    <Paper
      sx={{
        p: 2.0,
        height: "100%",
        bgcolor: category.color,
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.light",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <EventCategoryCardTitle title={category.title} />
        <EventCategoryDescription description={category.description} />
      </Box>

      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto" }}>
        {category.locations.map((location, locationIndex) => (
          <LocationLinkButton key={locationIndex} title={location.title} slug={location.slug} />
        ))}
        <EventLinkButton slug={category.slug} />
      </Box>
    </Paper>
  );
};

export default EventCategoryCard;
