import { getSkills } from "@/actions/skills/skills";
import SkillsPage from "@/components/skills/SkillsPage";

export const revalidate = 3600;

const OsztvSzktvSkills = async () => {
  const allSkills = await getSkills();
  const skills = allSkills.filter(
    (x) => x.category?.name !== "WorldSkills Hungary" && x.category?.name !== "NAK"
  );

  return <SkillsPage skills={skills} title="OSZTV és SZKTV versenyek" />;
};

export default OsztvSzktvSkills;
