import { getArticle } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getCategoryTree } from "@/actions/categories/categories";
import EventPage from "@/components/programok/EventPage";

export const revalidate = 3600;

interface EventPageProps {
  params: Promise<{
    eventSlug: string;
  }>;
}

export async function generateStaticParams() {
  const events = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" })).children.flatMap(
    (sector) => sector.items
  );

  return events.map((event) => ({ eventSlug: (event as ArticleFragment).slug }));
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
      metadata={event.metadata}
    />
  );
};

export default SectorEventPage;
