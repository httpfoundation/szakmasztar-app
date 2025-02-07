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

