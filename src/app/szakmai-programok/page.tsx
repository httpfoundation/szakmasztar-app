import { getCategoryTree } from "@/actions/categories/categories";
import PageContainer from "@/components/layouts/PageContainer";
import SectorCards from "@/components/skills/SectorCards";
import GradientTitle from "@/components/ui/GradientTitle";

// export const revalidate = 3600;
export type Sector = {
  id: string;
  name: string;
  imageUrl: string;
};

const EventsPage = async () => {
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;
  const displayedSectors = eventsBySectors.filter((sector) => sector.items.length > 0);
  const sectors = displayedSectors.map((sector) => ({
    id: sector.id,
    name: sector.name,
    imageUrl: sector.image?.url || "",
  }));

  return (
    <>
      <GradientTitle>Szakmai programok</GradientTitle>
      <PageContainer sx={{ position: "relative" }}>
        Ágazatok
        <SectorCards sectors={sectors} />
      </PageContainer>
    </>
  );
};

export default EventsPage;
