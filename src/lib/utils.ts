import { ApolloQueryResult } from "@apollo/client";
import { EventMapItem } from "@/actions/articles/articles";

export function formatDate(date: Date) {
  const formatter = Intl.DateTimeFormat("hu-HU", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return formatter.format(date);
}

export function stripHtmlTags(str: string) {
  return str.replace(/<\/?([^<>]+)>/g, "");
}

export function isNotFound<T>(response: ApolloQueryResult<T>) {
  return response.errors?.[0]?.extensions?.status === 404;
}

export function getMapDefaultPosition(
  zoomTo: string | undefined,
  items: EventMapItem[],
  svgWidth: number,
  svgHeight: number
) {
  if (zoomTo) {
    let foundItem = items.find((item) => item.href.toLowerCase().includes(zoomTo.toLowerCase()));
    if (!foundItem) {
      foundItem = items.find((item) => item.text.toLowerCase().includes(zoomTo?.toLowerCase()));
    }

    if (foundItem) {
      return {
        x: foundItem.stand.x + foundItem.stand.width / 2,
        y: foundItem.stand.y + foundItem.stand.height / 2,
        zoom: 0.7,
      };
    }
  }

  return { x: svgWidth / 2, y: svgHeight / 2, zoom: 0.1 };
}

export function getEventTypeBySlug(slug: string) {
  const eventOwner = slug.includes("wshu")
    ? "Worldskills Hungary"
    : slug.includes("osztvszktv")
      ? "OSZTV/SZKTV"
      : slug.includes("nak")
        ? "Nemzeti Agrárkamara"
        : "SzakmaSztár";
  const eventType = slug.includes("egyeb")
    ? "egyéb program"
    : slug.includes("verseny")
      ? eventOwner === "Worldskills Hungary"
        ? "nemzeti válogató döntő"
        : "szakmai tanulmányi verseny döntő"
      : slug.includes("szakmabemutato")
        ? "szakmai bemutató"
        : "egyéb program";

  return { eventOwner, eventType };
}

type MetadataCompetitor = {
  id: string;
  name: string;
  school?: string;
  teacher?: string;
};

export function parseArticleMetadata(metadata: string) {
  const competitors: MetadataCompetitor[] = [];
  let mapId: string | undefined = undefined;

  try {
    const parsedMetadata = JSON.parse(metadata);

    mapId = parsedMetadata.mapId;

    if (parsedMetadata && Array.isArray(parsedMetadata.competitors)) {
      parsedMetadata.competitors.forEach((competitor: MetadataCompetitor) => {
        competitors.push({
          ...competitor,
          school:
            competitor.school === "?"
              ? undefined
              : competitor.school === "-"
                ? undefined
                : competitor.school,
          teacher:
            competitor.teacher === "?"
              ? undefined
              : competitor.teacher === "-"
                ? undefined
                : competitor.teacher,
        });
      });

      return { competitors, mapId };
    }
  } catch {}

  return { competitors: [], mapId };
}
