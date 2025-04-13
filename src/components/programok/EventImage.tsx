import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import eventColorstars from "@/assets/images/event-colorstars.png";
import eventHero from "@/assets/images/event-hero.png";
import szakmasztarLogo from "@/assets/images/logo.svg";
import wshuLogo from "@/assets/images/wshu-logo.svg";
import { getEventTypeBySlug } from "@/lib/utils";

interface EventImageProps {
  image: string;
  title: string;
  slug: string;
}

const EventImage = ({ image, title, slug }: EventImageProps) => {
  const { eventOwner, eventType } = getEventTypeBySlug(slug);
  const imageSrc = slug.includes("wshu")
    ? wshuLogo
    : slug.includes("osztvszktv")
      ? szakmasztarLogo
      : null;

  return (
    <Stack sx={{ width: "100%", aspectRatio: "3 / 2", position: "relative" }}>
      <Image
        src={image}
        alt={title}
        width={1200}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center",
          aspectRatio: "3 / 2",
          maskImage: "linear-gradient(50deg, transparent 20%, black 70%)",
          zIndex: 100,
        }}
      />
      <Image
        src={eventColorstars}
        alt={""}
        role="presentation"
        style={{
          width: "auto",
          height: "100%",
          objectFit: "cover",
          objectPosition: "left",
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 200,
        }}
      />
      <Image
        src={eventHero}
        alt={""}
        role="presentation"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "left",
          position: "absolute",
          inset: 0,
        }}
      />

      <Stack
        sx={{
          position: "absolute",
          bottom: ".5rem",
          left: "1rem",
          alignItems: "flex-start",
          zIndex: 300,
        }}
      >
        {!!imageSrc && (
          <Image src={imageSrc} alt="Logo" style={{ height: "80px", width: "auto" }} />
        )}
        {!!eventOwner && (
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontSize: 16,
              fontWeight: 600,
              mt: 1,
            }}
          >
            {eventOwner}
          </Typography>
        )}
        {!!eventType && (
          <Typography
            variant="body2"
            sx={{
              textTransform: "uppercase",
              color: "white",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {eventType}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default EventImage;
