"use client";

import { ReactNode, useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton, Stack, SxProps, Typography } from "@mui/material";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import SectionContainer from "../layouts/SectionContainer";

const MapLegend = ({
  sx,
  legendItems,
}: {
  sx?: SxProps;
  legendItems?: { icon: ReactNode; text: string }[];
}) => {
  const [legendOpen, setLegendOpen] = useLocalStorage("mapLegendOpen", true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!legendItems || legendItems.length === 0) {
    return null;
  }

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
    <Stack direction="row" alignItems="center" spacing={0.75}>
      {icon}
      <Typography variant="body2" fontWeight={500} fontSize={11}>
        {text}
      </Typography>
    </Stack>
  );
};

export default MapLegend;
