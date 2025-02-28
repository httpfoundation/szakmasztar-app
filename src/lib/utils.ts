import { ApolloQueryResult } from "@apollo/client";

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
  items: { x: number; y: number; width: number; height: number; href: string; text: string }[],
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
        x: foundItem.x + foundItem.width / 2,
        y: foundItem.y + foundItem.width / 2,
        zoom: 1,
      };
    }
  }

  return { x: svgWidth / 2, y: svgHeight / 2, zoom: 0.35 };
}
