"use server";

import { getGlobalTag, getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import {
  GetCompetitionsDocument,
  GetCompetitionsQuery,
  GetCompetitionsQueryVariables,
  GetCurrentCompetitionDocument,
  GetCurrentCompetitionQuery,
  GetCurrentCompetitionQueryVariables,
} from "./competitions.generated";

export const getCompetitions = gqlCache(
  async () => {
    const response = await graphqlClient.query<GetCompetitionsQuery, GetCompetitionsQueryVariables>(
      {
        query: GetCompetitionsDocument,
      }
    );
    return response.data.competitions.filter((c) => !c.isJunior);
  },
  { tags: [getGlobalTag("competitions")], revalidate: 60 * 60 }
);

export const getCurrentCompetition = gqlCache(
  async () => {
    const response = await graphqlClient.query<
      GetCurrentCompetitionQuery,
      GetCurrentCompetitionQueryVariables
    >({
      query: GetCurrentCompetitionDocument,
    });

    return response.data.currentCompetition;
  },
  {
    tags: [getIdTag("current", "competitions")],
    revalidate: 60 * 60,
  }
);
