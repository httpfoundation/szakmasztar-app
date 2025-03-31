import { getSkills } from "@/actions/skills/skills";
import SkillsPage from "@/components/skills/SkillsPage";

export const revalidate = 3600;

const WshuEventsPage = async () => {
  const allSkills = await getSkills();
  const skills = allSkills.filter((x) => x.category?.name === "WorldSkills Hungary");

  return <SkillsPage skills={skills} title="WorldSkills Hungary események" />;
};

export default WshuEventsPage;
