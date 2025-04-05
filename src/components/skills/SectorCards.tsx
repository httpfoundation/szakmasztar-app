"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Stack } from "@mui/material";
import { Sector } from "@/app/szakmai-programok/page";
import SkillCategoryCard from "./SkillCategoryCard";

interface SectorCardsProps {
  sectors: Sector[];
}

const SectorCards = ({ sectors }: SectorCardsProps) => {
  const sectorPairs = sectors.reduce<Sector[][]>((pairs, sector, index) => {
    if (index % 2 === 0) {
      pairs.push([sector, sectors[index + 1]].filter(Boolean));
    }
    return pairs;
  }, []);
  return (
    <Box sx={{ position: "relative" }}>
      <IconButton
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          display: { xs: "none", md: "flex" },
          bgcolor: "white",
          "&:hover": { bgcolor: "white" },
        }}
        onClick={() => {
          const container = document.getElementById("scroll-container");
          if (container) {
            container.scrollBy({ left: -300, behavior: "smooth" });
          }
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <Stack
        id="scroll-container"
        sx={{
          gap: 2,
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          width: "80",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "& > *": {
            flex: "0 0 calc(33.333% - 16px)",
            minWidth: "calc(33.333% - 16px)",
          },
        }}
      >
        {sectorPairs.map((sectorPair) => (
          <Stack direction="column" spacing={2} key={sectorPair[0].id}>
            <SkillCategoryCard active={false} sector={sectorPair[0]} />
            {sectorPair[1] ? (
              <SkillCategoryCard active={false} sector={sectorPair[1]} />
            ) : (
              <Box sx={{ height: 73 }} />
            )}
          </Stack>
        ))}
      </Stack>

      <IconButton
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          display: { xs: "none", md: "flex" },
          bgcolor: "white",
          "&:hover": { bgcolor: "white" },
        }}
        onClick={() => {
          const container = document.getElementById("scroll-container");
          if (container) {
            container.scrollBy({ left: 300, behavior: "smooth" });
          }
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};

export default SectorCards;
