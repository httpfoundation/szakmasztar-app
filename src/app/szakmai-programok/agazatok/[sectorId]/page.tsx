import { notFound } from "next/navigation";
import { Paper, Typography } from "@mui/material";
import { getArticles } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getCategory, getCategoryTree } from "@/actions/categories/categories";
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
      <>
        {categories.map((category, idx) => {
          if (!events.some(category.filter)) {
            return null;
          }

          return (
            <Paper
              key={category.name}
              sx={{
                p: 2,
                pb: 0,
                mt: 3,
                mb: idx === categories.length - 1 ? 5 : 0,
                bgcolor: "#451F48",
              }}
              style={{
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: 18, mb: 1.5, color: "primary.contrastText", fontWeight: 600 }}
              >
                {category.name}
              </Typography>
              <EventCards events={events.filter(category.filter)} sectorId={sectorId} />
            </Paper>
          );
        })}
      </>
    </>
  );
};

export default SectorPage;
