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

