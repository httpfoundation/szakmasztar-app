import { Metadata } from "next";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getCategoryTree } from "@/actions/categories/categories";
import YellowTitle from "@/components/ui/YellowTitle";
import AllSkills from "./AllSkills";

export const metadata: Metadata = {
  title: "Szakmák",
};

const AllSkillsPage = async () => {
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;

  const skills = eventsBySectors
    .filter((sector) => sector.items.length > 0 && sector.name.trim().toLowerCase() !== "egyéb")
    .flatMap((sector) => sector.items) as ArticleFragment[];

  skills.sort((a, z) => a.title.localeCompare(z.title, "hu-HU"));

  return (
    <>
      <YellowTitle>Összes szakma</YellowTitle>
      <AllSkills skills={skills} />
    </>
  );
};

export default AllSkillsPage;
