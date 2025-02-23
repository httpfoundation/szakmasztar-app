import { getCurrentCompetition } from "@/actions/competitions/competitions";
import { getSkill, getSkills } from "@/actions/skills/skills";
import FormattedContent from "@/components/FormattedContent";
import { getArticleMetadata } from "@/lib/metadata";

interface SkillPageProps {
  params: Promise<{ skillSlug: string }>;
}

export const revalidate = 3600;

export async function generateMetadata({ params }: SkillPageProps) {
  const skill = await getSkill({ slug: (await params).skillSlug });
  return getArticleMetadata(skill.article.slug);
}

export async function generateStaticParams() {
  const articles = await getSkills();
  return articles.map((skill) => ({ skillSlug: skill.slug }));
}

const SkillPage = async ({ params }: SkillPageProps) => {
  const skillSlug = (await params).skillSlug;
  const currentCompetition = await getCurrentCompetition();
  const skill = await getSkill({ slug: skillSlug });
  const nationalCompetition = skill.nationalCompetitions.filter(
    (x) => x.competitionId === currentCompetition.id
  )[0];

  return (
    <div>
      <h1>{skill.name}</h1>
      <FormattedContent>{skill.article.lead}</FormattedContent>

      {!!nationalCompetition && !!nationalCompetition.article && (
        <div>
          <h2>Verseny információk</h2>
          <FormattedContent fontSize={18} fontWeight={500}>
            {nationalCompetition.article.lead}
          </FormattedContent>
          <FormattedContent>{nationalCompetition.article.content}</FormattedContent>
        </div>
      )}
    </div>
  );
};

export default SkillPage;

