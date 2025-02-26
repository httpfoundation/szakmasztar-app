"use server";

import { notFound } from "next/navigation";
import { getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
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

      return response.data.category.items.filter(
        (article) => article.__typename === "Article"
      ) as ArticleFragment[];
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

