"use client";

import { Button, Stack, Typography } from "@mui/material";
import { SkillFragment } from "@/actions/skills/skills.generated";
import PageTitle from "@/components/common/PageTitle";
import PageContainer from "@/components/layouts/PageContainer";

interface SkillsPageProps {
  skills: SkillFragment[];
  title: string;
}

const SkillsPage = ({ skills, title }: SkillsPageProps) => {
  return (
    <PageContainer>
      <PageTitle>{title}</PageTitle>
      <Stack
        sx={{
          gap: 2,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          },
          width: "100%",
        }}
      >
        {skills.map((skill) => (
          <Button
            key={skill.id}
            sx={{ p: 2, height: "100%", textAlign: "center" }}
            href={`/esemenyek/osztv-szktv-versenyek/${skill.slug}`}
          >
            <Typography variant="body1">{skill.name}</Typography>
          </Button>
        ))}
      </Stack>
    </PageContainer>
  );
};

export default SkillsPage;
