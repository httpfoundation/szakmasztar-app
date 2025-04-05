import { getArticle } from "@/actions/articles/articles";
import EventPage from "@/components/programok/EventPage";

interface EventPageProps {
  params: Promise<{
    sectorId: string;
    eventSlug: string;
  }>;
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

