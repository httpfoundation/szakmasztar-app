"use server";

import { getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import { Article } from "@/types.generated";
import {
  GetCategoryDocument,
  GetCategoryQuery,
  GetCategoryQueryVariables,
  GetCategoryTreeDocument,
  GetCategoryTreeQuery,
  GetCategoryTreeQueryVariables,
} from "./categories.generated";

export async function getCategoryTree(variables: GetCategoryTreeQueryVariables) {
  return await gqlCache(
    async () => {
      const response = await graphqlClient.query<
        GetCategoryTreeQuery,
        GetCategoryTreeQueryVariables
      >({
        query: GetCategoryTreeDocument,
        variables,
      });

      return response.data.category;
    },
    { tags: [getIdTag(variables.rootNodeId, "category-tree")], revalidate: 60 * 60 }
  )();
}

export async function getEventsArticlesByCategory(categorySlugPrefix: string) {
  console.log("getEventsArticles", categorySlugPrefix);
  const eventsBySectors = (await getCategoryTree({ rootNodeId: "szakmasztar-app-sector" }))
    .children;
  const allEvents = eventsBySectors.flatMap((sector) => sector.items as Article[]);
  return allEvents.filter((event) => event.slug.startsWith(categorySlugPrefix));
}

export async function getCategory(variables: GetCategoryQueryVariables) {
  return await gqlCache(
    async () => {
      const response = await graphqlClient.query<GetCategoryQuery, GetCategoryQueryVariables>({
        query: GetCategoryDocument,
        variables,
      });

      return response.data.category;
    },
    { tags: [getIdTag(variables.id, "categories")], revalidate: 60 * 60 }
  )();
}
