/* eslint-disable @typescript-eslint/no-explicit-any */
import { cache } from "react";
import { revalidateTag, unstable_cache } from "next/cache";

export type ValidTags = ReturnType<typeof getGlobalTag> | ReturnType<typeof getIdTag>;

export const CACHE_TAGS = {
  articles: "articles",
  competitions: "competitions",
  skills: "skills",
  nationalCompetitions: "nationalCompetitions",
  sponsors: "sponsors",
} as const;

export function getGlobalTag(tag: keyof typeof CACHE_TAGS) {
  return `global:${CACHE_TAGS[tag]}` as const;
}

export function getIdTag(id: string, tag: keyof typeof CACHE_TAGS) {
  return `id:${id}-${CACHE_TAGS[tag]}` as const;
}

export function clearFullCache() {
  revalidateTag("*");
}

export function gqlCache<T extends (...args: any[]) => Promise<any>>(
  cb: Parameters<typeof unstable_cache<T>>[0],
  { tags, revalidate }: { tags: ValidTags[]; revalidate?: number }
) {
  return cache(
    unstable_cache<T>(cb, [...tags, "*"], {
      tags: [...tags, "*"],
      revalidate: revalidate ?? 5 * 60,
    })
  );
}

export function revalidateCache({ tag, id }: { tag: keyof typeof CACHE_TAGS; id?: string }) {
  revalidateTag(getGlobalTag(tag));

  if (id != null) {
    revalidateTag(getIdTag(id, tag));
  }
}

