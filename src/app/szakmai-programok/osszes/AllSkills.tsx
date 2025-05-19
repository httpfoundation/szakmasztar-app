"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import CustomTextField from "@/components/ui/CustomTextField";
import Starform from "@/components/ui/Starform";

interface AllSkillsProps {
  skills: ArticleFragment[];
}

const AllSkills = ({ skills }: AllSkillsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const trimmedSearchTerm = searchTerm.trim().toLowerCase();

  const filteredSkills = skills.filter((skill) =>
    trimmedSearchTerm ? skill.title.toLowerCase().trim().includes(trimmedSearchTerm) : true
  );

  return (
    <PageContainer sx={{ position: "relative", pb: 4 }}>
      <Starform />

      <Typography variant="body2" align="justify" sx={{ mb: 1.5 }}>
        Az oldalon keresőmező és kártyák formájában böngészheted az összes szakmát.
      </Typography>

      <CustomTextField
        placeholder="Keresés"
        sx={{ mb: 2 }}
        InputProps={{ sx: { borderRadius: 999 } }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <EventCards events={filteredSkills} permutatingColors />
      {filteredSkills.length === 0 && (
        <Typography variant="body1" align="center" fontWeight={600}>
          Nincs találat a keresésre. Kérlek próbáld meg más kulcsszóval!
        </Typography>
      )}
    </PageContainer>
  );
};

export default AllSkills;
