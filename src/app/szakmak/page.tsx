import { Button, Stack, Typography } from "@mui/material";
import { getSkills } from "@/actions/skills/skills";

export const revalidate = 3600;

const SkillsPage = async () => {
  const skills = await getSkills();

  return (
    <>
      <h1>Szakmák</h1>
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
            href={`/szakmak/${skill.slug}`}
          >
            <Typography variant="body1">{skill.name}</Typography>
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default SkillsPage;
