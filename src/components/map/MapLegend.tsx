"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import etelcsomagIcon from "@/assets/images/icons/etelcsomag-icon.svg";
import foodIcon from "@/assets/images/icons/food-icon.svg";
import helloPayIcon from "@/assets/images/icons/hello-pay-icon.svg";
import szigetIcon from "@/assets/images/icons/sziget.svg";
import wcIcon from "@/assets/images/icons/wc-icon.svg";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import SectionContainer from "../layouts/SectionContainer";

const legendItems1 = [
  {
    icon: <Image src={wcIcon} alt="WC" style={{ width: "32px", height: "32px" }} />,
    text: "WC",
  },
  {
    icon: <Image src={etelcsomagIcon} alt="Ételcsomag" style={{ width: "32px", height: "32px" }} />,
    text: "Ételcsomag",
  },
  {
    icon: <Image src={foodIcon} alt="Étterem / Büfé" style={{ width: "32px", height: "32px" }} />,
    text: "Étterem / Büfé",
  },
];

const legendItems2 = [
  {
    icon: (
      <Image
        src={helloPayIcon}
        alt="Hello Pay feltöltő pont"
        style={{ width: "28px", height: "28px" }}
      />
    ),
    text: "Hello Pay feltöltő pont",
  },
  {
    icon: (
      <Image src={szigetIcon} alt="Szakma Sztár Sziget" style={{ width: "28px", height: "28px" }} />
    ),
    text: "Szakma Sztár Sziget",
  },
];

const legendItems3 = [
  {
    icon: (
      <Box
        sx={{ width: "22px", height: "22px", border: "1px solid white", bgcolor: "wshu.main" }}
      />
    ),
    text: "WorldSkills Hungary",
  },
  {
    icon: (
      <Box
        sx={{ width: "22px", height: "22px", border: "1px solid white", bgcolor: "osztv.main" }}
      />
    ),
    text: "Szakmai tanulmányi versenyek",
  },
  {
    icon: (
      <Box
        sx={{ width: "22px", height: "22px", border: "1px solid white", bgcolor: "other.main" }}
      />
    ),
    text: "Egyéb események",
  },
  {
    icon: (
      <Box sx={{ width: "22px", height: "22px", border: "1px solid white", bgcolor: "nak.main" }} />
    ),
    text: "NAK szakmai bemutatók",
  },
];

const MapLegend = () => {
  const [legendOpen, setLegendOpen] = useLocalStorage("mapLegendOpen", true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Stack
      sx={{
        width: "100%",
        bgcolor: "success.dark",
        boxShadow: legendOpen ? "0 2px 8px rgba(0,0,0,.5)" : "0 2px 4px rgba(0,0,0,.1)",
        zIndex: 2,
        position: "absolute",
        top: "52px", // yellow title height
        left: 0,
        right: 0,
      }}
    >
      <SectionContainer padding={1} sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {legendOpen && (
          <>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ justifyContent: "space-around", width: "100%" }}
            >
              {legendItems1.map((item, index) => (
                <MapLegendItem key={index} {...item} />
              ))}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ justifyContent: "space-around", width: "100%" }}
            >
              {legendItems2.map((item, index) => (
                <MapLegendItem key={index} {...item} />
              ))}
            </Stack>

            <Stack
              spacing={1}
              sx={{
                borderTop: "1px solid #fff5",
                width: "100%",
                pt: 1.5,
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-around",
              }}
            >
              {legendItems3.map((item, index) => (
                <MapLegendItem key={index} {...item} />
              ))}
            </Stack>
          </>
        )}

        {/* Title */}
        <Stack sx={{ width: "100%", alignItems: "center" }}>
          <IconButton
            size="small"
            sx={{ color: "white", my: -1 }}
            onClick={() => setLegendOpen(!legendOpen)}
          >
            <KeyboardArrowUpIcon
              sx={{ transform: legendOpen ? "rotate(180deg)" : undefined, transition: ".2s" }}
            />
          </IconButton>
        </Stack>
      </SectionContainer>
    </Stack>
  );
};

const MapLegendItem = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={0.5}>
      {icon}
      <Typography variant="body2" fontWeight={500} fontSize={12}>
        {text}
      </Typography>
    </Stack>
  );
};

export default MapLegend;
