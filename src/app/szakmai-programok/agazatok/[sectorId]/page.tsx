import { notFound } from "next/navigation";
import { Paper, Typography } from "@mui/material";
import { getArticles } from "@/actions/articles/articles";
import { getCategory, getCategoryTree } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import EventCards from "@/components/programok/EventCards";
import GradientTitle from "@/components/ui/GradientTitle";

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

const SectorPage = async ({ params }: SectorPageProps) => {
  const { sectorId } = await params;
  const category = await getCategory({ id: sectorId });
  if (!category) {
    notFound();
  }

  const events = await getArticles({ categoryId: sectorId });

  return (
    <>
      <GradientTitle>{category.name}</GradientTitle>
      <PageContainer>
        <Paper sx={{ p: 2, mb: 3, bgcolor: "#71376A55" }}>
          <Typography variant="h2" sx={{ fontSize: 20, color: "success.main", mb: 2 }}>
            WorldSkills Hungary
          </Typography>
          <EventCards events={events} sectorId={sectorId} />
        </Paper>
      </PageContainer>
    </>
  );
};

export default SectorPage;
