import { Grid } from "@mui/material";
import { getCurrentCompetition } from "@/actions/competitions/competitions";
import { getSkill, getSkills } from "@/actions/skills/skills";
import PageTitle from "@/components/common/PageTitle";
import FormattedContent from "@/components/FormattedContent";
import SponsorCard from "@/components/sponsor/SponsorCard";
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

  return (
    <div>
      <PageTitle>{skill.name}</PageTitle>
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

      {skill.sponsors.length > 0 && (
        <div>
          <h2>Szponzorok</h2>
          <Grid container spacing={2}>
            {skill.sponsors.map((sponsor) => (
              <Grid item xs={6} sm={6} md={2} key={sponsor.id}>
                <SponsorCard sponsor={sponsor} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SkillPage;
