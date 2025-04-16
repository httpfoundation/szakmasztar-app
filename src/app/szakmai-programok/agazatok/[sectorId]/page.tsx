import { notFound } from "next/navigation";
import { Paper, Typography } from "@mui/material";
import { getArticles } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getCategory, getCategoryTree } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export async function generateStaticParams() {
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;

  return eventsBySectors.map((sector) => ({ sectorId: sector.id }));
}

interface SectorPageProps {
  params: Promise<{
    sectorId: string;
  }>;
}

const categories = [
  {
    name: "WorldSkills Hungary",
    filter: (article: ArticleFragment) => article.slug.startsWith("wshu"),
  },
  {
    name: "SZKTV/OSZTV",
    filter: (article: ArticleFragment) => article.slug.startsWith("osztvszktv"),
  },
  {
    name: "NAK",
    filter: (article: ArticleFragment) => article.slug.startsWith("nak"),
  },
  {
    name: "Egyéb",
    filter: (article: ArticleFragment) =>
      !article.slug.startsWith("wshu") &&
      !article.slug.startsWith("osztvszktv") &&
      !article.slug.startsWith("nak"),
  },
];

const SectorPage = async ({ params }: SectorPageProps) => {
  const { sectorId } = await params;
  const category = await getCategory({ id: sectorId });
  if (!category) {
    notFound();
  }

  const events = await getArticles({ categoryId: sectorId });

  return (
    <>
      <YellowTitle>{category.name}</YellowTitle>
      <PageContainer>
        {categories.map((category) => {
          if (!events.some(category.filter)) {
            return null;
          }

          return (
            <Paper
              key={category.name}
              sx={{
                p: 2,
                pb: 0,
                mb: 2,
                bgcolor: "#71376A55",
                border: "1px solid",
                borderColor: "primary.light",
              }}
            >
              <Typography variant="h2" sx={{ fontSize: 19, mb: 1, color: "primary.contrastText" }}>
                {category.name}
              </Typography>
              <EventCards events={events.filter(category.filter)} sectorId={sectorId} />
            </Paper>
          );
        })}
      </PageContainer>
    </>
  );
};

export default SectorPage;
