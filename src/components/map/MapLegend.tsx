"use client";

import { ReactNode, useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, IconButton, Stack, SxProps, Typography } from "@mui/material";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import SectionContainer from "../layouts/SectionContainer";

const legendItems = [
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "wshu.main",
        }}
      />
    ),
    text: "WorldSkills Shanghai 2026 nemzeti döntők és szakmai bemutatók",
  },
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "osztv.main",
        }}
      />
    ),
    text: "OSZTV és SZKTV döntők, szakmai bemutatók és interaktív programok",
  },
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "other.main",
        }}
      />
    ),
    text: "Egyéb: Szakmai támogatóink, az esemény szponzorai",
  },
  {
    icon: (
      <Box
        sx={{
          width: "22px",
          flexShrink: 0,
          height: "22px",
          marginRight: "4px",
          border: "1px solid white",
          bgcolor: "nak.main",
        }}
      />
    ),
    text: "A Nemzeti Agrárgazdasági Kamara szakmai bemutatói, agrár szabadulószoba",
  },
];

const MapLegend = ({ sx }: { sx?: SxProps }) => {
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
        left: 0,
        right: 0,
        ...sx,
      }}
    >
      <SectionContainer padding={1}>
        {legendOpen && (
          <>
            <Stack
              spacing={1}
              sx={{
                width: "100%",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-around",
                my: 1,
              }}
            >
              {legendItems.map((item, index) => (
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
              sx={{ transform: !legendOpen ? "rotate(180deg)" : undefined, transition: ".2s" }}
            />
          </IconButton>
        </Stack>
      </SectionContainer>
    </Stack>
  );
};

export const MapLegendItem = ({ icon, text }: { icon: ReactNode; text: string }) => {
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
