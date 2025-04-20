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
        width: "min(100%,852px)",
        left: "50%",
        transform: "translateX(-50%)",
        height: { xs: "auto", md: "320px" },
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
            alignItems: "flex-start",
            justifyContent: "flex-end",
            flexDirection: "column",
            px: 1.5,
            py: 2.5,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textAlign: "left",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              textTransform: "uppercase",
            }}
          >
            Szakma Sztár <br />
            <span style={{ fontWeight: 400 }}>Feszivál 2025</span>
          </Typography>
          <LinkButton
            href="/szakmasztar"
            variant="contained"
            color="primary"
            direction="forward"
            sx={{ px: 3, py: 1, mt: 2, bgcolor: "primary.light", fontSize: 14, fontWeight: 600 }}
          >
            Tudj meg többet a fesztiválról!
          </LinkButton>
        </Box>
      )}
    </Box>
  );
}
