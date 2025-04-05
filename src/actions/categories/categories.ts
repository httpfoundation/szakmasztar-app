"use server";

import { getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import {
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
