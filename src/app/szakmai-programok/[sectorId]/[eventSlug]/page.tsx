import { getArticle } from "@/actions/articles/articles";
import { getCategoryTree } from "@/actions/categories/categories";
import EventPage from "@/components/programok/EventPage";

export const revalidate = 3600;

interface EventPageProps {
  params: Promise<{
    sectorId: string;
    eventSlug: string;
  }>;
}

export async function generateStaticParams() {
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;

  const params: Awaited<EventPageProps["params"]>[] = [];

  for (const sector of eventsBySectors) {
    for (const event of sector.items) {
      if (event.__typename === "Article") {
        params.push({
          sectorId: sector.id,
          eventSlug: event.slug,
        });
      }
    }
  }

  return params;
}

const SectorEventPage = async ({ params }: EventPageProps) => {
  const { eventSlug } = await params;
  const event = await getArticle({ slug: eventSlug });

  return (
    <EventPage
      title={event.title}
      generalInfo={event.content || ""}
      eventInfo={event.lead || ""}
      image={event.image?.url || ""}
      location={"A21"}
      sponsors={[]}
    />
  );
};

export default SectorEventPage;
