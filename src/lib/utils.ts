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
        y: foundItem.stand.y + foundItem.stand.width / 2,
        zoom: 0.9,
      };
    }
  }

  return { x: svgWidth / 2, y: svgHeight / 2, zoom: 0.1 };
}
