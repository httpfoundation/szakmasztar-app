import { Stack } from "@mui/material";
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
    <Stack
      sx={{
        p: 2,
        height: "100%",
        bgcolor: category.color,
        border: "1px solid",
        borderRadius: 3,
        borderColor: "primary.light",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <EventCategoryCardTitle title={category.title} />
      <EventCategoryDescription description={category.description} />

      <Stack sx={{ flexDirection: "column", gap: 1, mt: "auto", alignItems: "flex-start" }}>
        {category.locations.map((location, locationIndex) => (
          <LocationLinkButton key={locationIndex} title={location.title} slug={location.slug} />
        ))}
        <EventLinkButton slug={category.slug} />
      </Stack>
    </Stack>
  );
};

export default EventCategoryCard;

