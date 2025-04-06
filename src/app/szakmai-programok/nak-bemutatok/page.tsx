import { getSkills } from "@/actions/skills/skills";
import SkillsPage from "@/components/skills/SkillsPage";

export const revalidate = 3600;

const NakEventsPage = async () => {
  const allSkills = await getSkills();
  const skills = allSkills.filter((x) => x.category?.name === "NAK");

  return <SkillsPage skills={skills} title="Nemzeti Agrárkamara szakmai események" />;
};

export default NakEventsPage;
