"use client";

import PageContainer from "@/components/layouts/PageContainer";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import GradientTitle from "@/components/ui/GradientTitle";

// export const revalidate = 3600;

const SkillsPage = () => {
  const skillCategories = [
    {
      id: "1",
      name: "Bányászat és kohászat",
    },
    {
      id: "2",
      name: "Elektronika és elektrotechnika",
    },
  ];
  return (
    <>
      <GradientTitle>Szakmai programok</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>Ágazatok</PageContainer>
      <SkillCategoryCard
        active={false}
        skillCategory={skillCategories[0]}
        onSelect={(id: string) => {
          console.log(id);
        }}
      />
    </>
  );
};

export default SkillsPage;
