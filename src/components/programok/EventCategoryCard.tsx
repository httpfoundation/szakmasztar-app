import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack } from "@mui/material";
import LinkChip from "../ui/LinkChip";
import EventCategoryCardTitle from "./EventCategoryCardTitle";
import EventCategoryDescription from "./EventCategoryDescription";

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
    symbolSrc?: string;
  };
}

const EventCategoryCard = ({ category }: EventCategoryCardProps) => {
  return (
    <Stack
      sx={{
        p: 1.5,
        height: "100%",
        bgcolor: category.color,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        isolation: "isolate",
      }}
    >
      <EventCategoryCardTitle title={category.title} />
      <EventCategoryDescription description={category.description} />

      <Stack
        sx={{
          gap: 1,
          mt: "auto",
          alignItems: "flex-start",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <LinkChip href={`/${category.slug}`} icon={<InfoIcon />}>
          Programok
        </LinkChip>

        {category.locations.map((location, locationIndex) => (
          <LinkChip key={locationIndex} href={location.slug} icon={<LocationOnIcon />}>
            {location.title}
          </LinkChip>
        ))}
      </Stack>

      {!!category.symbolSrc && (
        <Image
          src={category.symbolSrc}
          width={100}
          height={100}
          alt=""
          role="presentation"
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            zIndex: -1,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
      )}
    </Stack>
  );
};

export default EventCategoryCard;
