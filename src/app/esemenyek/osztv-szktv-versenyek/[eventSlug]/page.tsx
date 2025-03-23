import { getCurrentCompetition } from "@/actions/competitions/competitions";
import { getSkill, getSkills } from "@/actions/skills/skills";
import EventPage from "@/components/programok/EventPAge";
import { getArticleMetadata } from "@/lib/metadata";

interface SkillPageProps {
  params: Promise<{ eventSlug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: SkillPageProps) {
  const skill = await getSkill({ slug: (await params).eventSlug });
  return getArticleMetadata(skill.article.slug);
}

export async function generateStaticParams() {
  const articles = await getSkills();
  return articles.map((skill) => ({ skillSlug: skill.slug }));
}

const SkillPage = async ({ params }: SkillPageProps) => {
  const skillSlug = (await params).eventSlug;
  const currentCompetition = await getCurrentCompetition();
  const skill = await getSkill({ slug: skillSlug });
  const nationalCompetition = skill.nationalCompetitions.filter(
    (x) => x.competitionId === currentCompetition.id
  )[0];
  const { name: title, sponsors, article } = skill;
  const { lead: skillLead } = article;
  const content = nationalCompetition ? nationalCompetition.article?.content : null;
  // const lead = nationalCompetition ? nationalCompetition.article?.lead : "";
  const image = nationalCompetition ? nationalCompetition.article?.image : null;

  return (
    <EventPage
      title={title}
      eventInfo={content || ""}
      generalInfo={skillLead || ""}
      image={image?.url || ""}
      location={"A21"}
      sponsors={sponsors}
    />
  );
};

export default SkillPage;
