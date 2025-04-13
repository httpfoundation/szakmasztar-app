"use client";

import { Stack } from "@mui/material";
import { Sector } from "@/app/szakmai-programok/page";
import SkillCategoryCard from "./SkillCategoryCard";

interface SectorCardsProps {
  sectors: Sector[];
}

const SectorCards = ({ sectors }: SectorCardsProps) => {
  return (
    <Stack
      sx={{
        gap: 2,
        display: "grid",
        gridTemplateColumns: { xs: "repeat(2,1fr)", sm: "repeat(3,1fr)", md: "repeat(4,1fr)" },
        mb: 3,
      }}
    >
      {sectors.map((sector) => (
        <SkillCategoryCard key={sector.name} sector={sector} />
      ))}
    </Stack>
  );
};

export default SectorCards;
