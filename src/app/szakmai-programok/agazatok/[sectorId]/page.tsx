import Image from "next/image";
import { notFound } from "next/navigation";
import { Paper, Stack, Typography } from "@mui/material";
import { getArticles } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getCategory, getCategoryTree } from "@/actions/categories/categories";
import SectionContainer from "@/components/layouts/SectionContainer";
import EventCards from "@/components/programok/EventCards";
import YellowTitle from "@/components/ui/YellowTitle";

export const revalidate = 3600;

export async function generateStaticParams() {
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;

  return eventsBySectors.map((sector) => ({ sectorId: sector.id }));
}

export async function generateMetadata({ params }: SectorPageProps) {
  const { sectorId } = await params;
  const category = await getCategory({ id: sectorId });
  if (!category) {
    return {};
  }

  return {
    title: category.name,
  };
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
    symbolSrc: "/images/wshu-symbol.svg",
  },
  {
    name: "SZKTV/OSZTV",
    filter: (article: ArticleFragment) => article.slug.startsWith("osztvszktv"),
    symbolSrc: "/images/osztv-symbol.svg",
  },
  {
    name: "Nemzeti Agrárgazdasági Kamara",
    filter: (article: ArticleFragment) => article.slug.startsWith("nak"),
    symbolSrc: "/images/nak-symbol.svg",
  },
  // {
  //   name: "Egyéb",
  //   filter: (article: ArticleFragment) =>
  //     !article.slug.startsWith("wshu") &&
  //     !article.slug.startsWith("osztvszktv") &&
  //     !article.slug.startsWith("nak"),
  //   symbolSrc: "/images/sponsor-symbol.svg",
  // },
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
      <Stack sx={{ width: "100%", mt: 3, mb: 6 }} spacing={3}>
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
                bgcolor: "#451F48",
                position: "relative",
                overflow: "hidden",
              }}
              style={{
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <SectionContainer padding={0} sx={{ p: 0, position: "relative" }}>
                <Image
                  src={category.symbolSrc}
                  width={100}
                  height={100}
                  alt=""
                  role="presentation"
                  style={{
                    position: "absolute",
                    right: "-1rem",
                    top: "-1.5rem",
                    opacity: 0.2,
                    pointerEvents: "none",
                  }}
                />

                <Typography
                  variant="h2"
                  sx={{ fontSize: 18, mb: 1.5, color: "primary.contrastText", fontWeight: 600 }}
                >
                  {category.name}
                </Typography>
                <EventCards events={events.filter(category.filter)} />
              </SectionContainer>
            </Paper>
          );
        })}
      </Stack>
    </>
  );
};

export default SectorPage;
