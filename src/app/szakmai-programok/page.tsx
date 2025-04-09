import { getArticle } from "@/actions/articles/articles";
import { getCategoryTree } from "@/actions/categories/categories";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import SectorCards from "@/components/skills/SectorCards";
import GradientTitle from "@/components/ui/GradientTitle";

export const revalidate = 3600;

export type Sector = {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
};

const EventsPage = async () => {
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;

  const { title, lead } = await getArticle({ slug: "szakmai-programok-oldal" });

  const displayedSectors = eventsBySectors.filter((sector) => sector.items.length > 0);
  const sectors = displayedSectors.map((sector) => ({
    id: sector.id,
    name: sector.name,
    imageUrl: sector.image?.url || "",
    slug: sector.slug,
  }));

  return (
    <>
      <GradientTitle>{title}</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>
        <FormattedContent sx={{ my: 2 }} variant="body1">
          {lead}
        </FormattedContent>

        <SectorCards sectors={sectors} />
      </PageContainer>
    </>
  );
};

export default EventsPage;
