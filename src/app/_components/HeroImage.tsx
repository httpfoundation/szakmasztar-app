import Image, { StaticImageData } from "next/image";
import { Box, Typography } from "@mui/material";
import LinkButton from "@/components/common/LinkButton";

type HeroImageProps = {
  image: string | StaticImageData;
  alt: string;
  title?: string;
};

export default function HeroImage({ image, alt, title }: HeroImageProps) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        transform: "translateX(-50%)",
        height: { xs: "auto", md: "500px" },
        overflow: "hidden",
        aspectRatio: { xs: "3/2", md: "auto" },
      }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      {title && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              px: 2,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Szakma Sztár Feszivál
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
              px: 2,
              mt: 1,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            2025. április 25-26.
          </Typography>
          <LinkButton
            href="/szakmasztar"
            variant="contained"
            color="primary"
            direction="forward"
            sx={{ px: 2, mt: 2 }}
          >
            Tudj meg többet a fesztiválról!
          </LinkButton>
        </Box>
      )}
    </Box>
  );
}
