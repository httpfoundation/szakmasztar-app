import { getArticle } from "@/actions/articles/articles";
import { ArticleFragment } from "@/actions/articles/articles.generated";
import { getCategoryTree } from "@/actions/categories/categories";
import EventPage from "@/components/programok/EventPage";
import { getArticleMetadata } from "@/lib/metadata";

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

export async function generateMetadata({ params }: EventPageProps) {
  const { eventSlug } = await params;
  return await getArticleMetadata(eventSlug);
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
      metadata={event.metadata}
      slug={event.slug}
    />
  );
};

export default SectorEventPage;
