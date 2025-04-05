"use client";

import { Stack } from "@mui/material";
import { Sector } from "@/app/szakmai-programok/page";
import SectionContainer from "../layouts/SectionContainer";
import SkillCategoryCard from "./SkillCategoryCard";

interface SectorCardsProps {
  sectors: Sector[];
}

const SectorCards = ({ sectors }: SectorCardsProps) => {
  return (
    <SectionContainer sx={{ pb: 4 }}>
      <Stack
        sx={{
          gap: 2,
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2,1fr)", sm: "repeat(3,1fr)", md: "repeat(4,1fr)" },
        }}
      >
        {sectors.map((sector) => (
          <SkillCategoryCard key={sector.name} active={false} sector={sector} />
        ))}
      </Stack>
    </SectionContainer>
  );
};

export default SectorCards;
