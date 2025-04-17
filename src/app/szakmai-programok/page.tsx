import { getArticle } from "@/actions/articles/articles";
import { getCategoryTree } from "@/actions/categories/categories";
import FormattedContent from "@/components/FormattedContent";
import PageContainer from "@/components/layouts/PageContainer";
import SectorCards from "@/components/skills/SectorCards";
import YellowTitle from "@/components/ui/YellowTitle";

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

  const sectors = eventsBySectors
    .filter((sector) => sector.items.length > 0 && sector.name.trim().toLowerCase() !== "egyéb")
    .map((sector) => ({
      id: sector.id,
      name: sector.name.trim(),
      imageUrl: sector.image?.url || "",
      slug: sector.slug,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "hu-HU"));

  return (
    <>
      <YellowTitle>{title}</YellowTitle>
      <PageContainer sx={{ position: "relative" }}>
        <FormattedContent sx={{ mb: 2 }} variant="body2">
          {lead}
        </FormattedContent>

        <SectorCards sectors={sectors} />
      </PageContainer>
    </>
  );
};

export default EventsPage;
