"use server";

import { notFound } from "next/navigation";
import { getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import { getCategoryTree } from "../categories/categories";
import {
  ArticleFragment,
  GetArticleDocument,
  GetArticleQuery,
  GetArticleQueryVariables,
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
  GetHomeHighlightedArticlesDocument,
  GetHomeHighlightedArticlesQuery,
  GetHomeHighlightedArticlesQueryVariables,
  GetPaginatedArticlesDocument,
  GetPaginatedArticlesQuery,
  GetPaginatedArticlesQueryVariables,
} from "./articles.generated";

export async function getArticles(variables: GetArticlesQueryVariables) {
  return await gqlCache(
    async () => {
      const response = await graphqlClient.query<GetArticlesQuery, GetArticlesQueryVariables>({
        query: GetArticlesDocument,
        variables,
      });

      return (response.data.category.items as ArticleFragment[]).filter(
        (article) => article.__typename === "Article"
      );
    },
    { tags: [getIdTag(variables.categoryId, "category-articles")], revalidate: 60 * 60 }
  )();
}

export async function getArticle(variables: GetArticleQueryVariables): Promise<ArticleFragment> {
  return await gqlCache(
    async () => {
      const response = await graphqlClient.query<GetArticleQuery, GetArticleQueryVariables>({
        query: GetArticleDocument,
        variables,
      });

      if (isNotFound(response)) {
        notFound();
      }

      return response.data.article;
    },
    { tags: [getIdTag(variables.slug, "articles")], revalidate: 60 * 60 }
  )();
}

export async function getHomeHighlightedArticles(
  variables: GetHomeHighlightedArticlesQueryVariables
): Promise<ArticleFragment[]> {
  const response = await graphqlClient.query<
    GetHomeHighlightedArticlesQuery,
    GetHomeHighlightedArticlesQueryVariables
  >({
    query: GetHomeHighlightedArticlesDocument,
    variables,
  });

  return response.data.homeHighlightedArticles;
}

export async function getPaginatedArticles(variables: GetPaginatedArticlesQueryVariables) {
  const response = await graphqlClient.query<
    GetPaginatedArticlesQuery,
    GetPaginatedArticlesQueryVariables
  >({
    query: GetPaginatedArticlesDocument,
    variables,
  });

  return response.data.paginatedArticles;
}

export type EventMapItem = {
  text: string;
  href: string;
  mapId: string;
  jumpCode: number;
  stand: {
    x: number;
    y: number;
    width: number;
    height: number;
    fontSize?: number;
  };
};

export async function getMapItems() {
  const eventsBySectors = await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" });
  const mapItems = eventsBySectors.children.flatMap((sector) => sector.items) as ArticleFragment[];

  const result: EventMapItem[] = [];

  for (const item of mapItems.filter(
    (x) => !!x.metadata && x.metadata !== "NULL" && x?.metadata !== "{}"
  )) {
    try {
      let slug = "#";
      if (item.slug.startsWith("wshu")) {
        slug = `/szakmai-programok/${item.slug}`;
      } else if (item.slug.startsWith("osztv")) {
        slug = `/szakmai-programok/${item.slug}`;
      } else if (item.slug.startsWith("nak")) {
        slug = `/szakmai-programok/${item.slug}`;
      } else if (item.slug.startsWith("egyeb")) {
        slug = `/szakmai-programok/${item.slug}`;
      }

      if (!item.content && !item.lead) {
        slug = "#";
      }

      const parsed = JSON.parse(item.metadata);
      result.push({
        stand: {
          ...parsed.map,
        },
        href: slug,
        text: item.subtitle ?? item.title,
        jumpCode: parsed.jumpCode,
        mapId: parsed.mapId,
      });
    } catch {
      console.log("Failed to parse metadata for item", item.title);
      // console.log(e);
      // console.log(item.metadata);
    }
  }

  return result;
}
