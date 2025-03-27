import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import eventColorstars from "@/assets/images/event-colorstars.png";
import eventHero from "@/assets/images/event-hero.png";
import whiteLogo from "@/assets/images/logo.svg";

interface EventImageProps {
  image: string;
  title: string;
}

const EventImage = ({ image, title }: EventImageProps) => {
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
          maskImage: "linear-gradient(55deg, transparent 20%, black 80%)",
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
        spacing={1}
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          alignItems: "flex-start",
          zIndex: 300,
        }}
      >
        <Image src={whiteLogo} alt="Logo" style={{ height: "80px", width: "auto" }} />
        <Typography variant="h1" sx={{ textTransform: "uppercase", color: "white", fontSize: 34 }}>
          {title}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EventImage;
