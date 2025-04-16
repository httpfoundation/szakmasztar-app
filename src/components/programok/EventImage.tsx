import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Stack } from "@mui/material";
import eventColorstars from "@/assets/images/event-colorstars.png";
import eventHero from "@/assets/images/event-hero.png";

interface EventImageProps {
  image: string;
  title: string;
  slug: string;
  leirasBtnText: string;
  infoBtnText: string;
  hasCompetitors: boolean;
}

const EventImage = ({
  image,
  title,
  infoBtnText,
  leirasBtnText,
  hasCompetitors,
}: EventImageProps) => {
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
          pointerEvents: "none",
        }}
      />

      <Stack
        sx={{
          position: "absolute",
          bottom: ".75rem",
          left: ".75rem",
          alignItems: "flex-start",
          zIndex: 300,
          gap: 1.5,
        }}
      >
        {hasCompetitors && (
          <Button href="#versenyzok" endIcon={<KeyboardArrowDownIcon sx={{ ml: -0.5 }} />}>
            Versenyzők
          </Button>
        )}
        <Button href="#leiras" endIcon={<KeyboardArrowDownIcon sx={{ ml: -0.5 }} />}>
          {leirasBtnText}
        </Button>
        <Button href="#info" endIcon={<KeyboardArrowDownIcon sx={{ ml: -0.5 }} />}>
          {infoBtnText}
        </Button>
      </Stack>
    </Stack>
  );
};

export default EventImage;
