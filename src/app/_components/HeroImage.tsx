"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import Hero1 from "@/assets/images/hero/hero-1.png";
import Hero2 from "@/assets/images/hero/hero-2.png";
import Hero3 from "@/assets/images/hero/hero-3.webp";
import HeroLeftOverlay from "@/assets/images/hero/hero-left-overlay.png";
import HeroRightOverlay from "@/assets/images/hero/hero-right-overlay.png";
import LinkButton from "@/components/common/LinkButton";

const HERO_IMAGES = [Hero1, Hero2, Hero3];

type HeroImageProps = {
  alt: string;
  title?: string;
};

export default function HeroImage({ alt, title }: HeroImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIndex, setFadeIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        setFadeIndex(prev);
        setTimeout(() => setFadeIndex(-1), 1000);
        return (prev + 1) % HERO_IMAGES.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "min(100%,852px)",
        left: "50%",
        transform: "translateX(-50%)",
        height: { xs: "auto", md: "320px" },
        overflow: "hidden",
        aspectRatio: { xs: "4/3", md: "auto" },
      }}
    >
      {HERO_IMAGES.map((img, index) => {
        const isActive = currentImageIndex === index;
        const isFadingOut = fadeIndex === index;

        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: isActive ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                transform:
                  isActive || isFadingOut
                    ? "translateX(5%) scale(1.1)"
                    : "translateX(0px) scale(1)",
                transition: isActive || isFadingOut ? "transform 8s linear" : "none",
              }}
            >
              <Image
                src={img}
                alt={`${alt} ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Box>
        );
      })}

      <Image
        src={HeroLeftOverlay}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "right",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Image
        src={HeroRightOverlay}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "25%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "left",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {title && (
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            flexDirection: "column",
            top: "50%",
            transform: "translateY(-50%)",
            left: "6%",
            zIndex: 2,
            pointerEvents: "none",
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
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
            }}
          >
            <Box component="span" sx={{ fontWeight: 700, fontSize: "1.8rem" }}>
              Szakma
            </Box>
            <Box component="span" sx={{ fontWeight: 700, fontSize: "2.4rem" }}>
              Sztár
            </Box>
            <Box component="span" sx={{ fontWeight: 300, fontSize: "1.55rem" }}>
              Fesztivál
            </Box>
          </Typography>
        </Box>
      )}

      <LinkButton
        href="/szakmasztar"
        variant="contained"
        color="primary"
        direction="forward"
        startIcon={null}
        sx={{
          py: 1.5,
          pr: 2.5,
          pl: 3,
          mt: 2,
          bgcolor: "primary.main",
          fontSize: 14,
          fontWeight: 600,
          alignSelf: "flex-end",
          position: "absolute",
          bottom: 15,
          right: 15,
          zIndex: 2,
        }}
      >
        Tudj meg többet a fesztiválról
      </LinkButton>
    </Box>
  );
}
