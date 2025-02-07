"use server";

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import { graphqlClient } from "@/lib/client";
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

export const getArticles = unstable_cache(
  async (variables: GetArticlesQueryVariables) => {
    const response = await graphqlClient.query<GetArticlesQuery, GetArticlesQueryVariables>({
      query: GetArticlesDocument,
      variables,
    });

    return response.data.category.items.filter(
      (article) => article.__typename === "Article"
    ) as ArticleFragment[];
  },
  ["*", "articles"],
  { revalidate: 60 * 60, tags: ["*", "articles"] }
);

export async function getArticle(variables: GetArticleQueryVariables): Promise<ArticleFragment> {
  const cacheKey = `article-${variables.slug}`;
  return await unstable_cache(
    async () => {
      const response = await graphqlClient.query<GetArticleQuery, GetArticleQueryVariables>({
        query: GetArticleDocument,
        variables,
      });

      if (response.errors?.[0].extensions?.status === 404) {
        return notFound();
      }

      return response.data.article;
    },
    ["*", cacheKey],
    { revalidate: 60 * 60, tags: ["*", cacheKey] }
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

