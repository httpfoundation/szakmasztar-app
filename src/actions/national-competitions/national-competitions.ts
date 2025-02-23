"use server";

import { notFound } from "next/navigation";
import { getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import {
  GetNationalCompetitionDocument,
  GetNationalCompetitionQuery,
  GetNationalCompetitionQueryVariables,
  NationalCompetitionFragment,
} from "./national-competition.generated";

export async function getNationalCompetition(
  variables: GetNationalCompetitionQueryVariables
): Promise<NationalCompetitionFragment> {
  return await gqlCache(
    async () => {
      const response = await graphqlClient.query<
        GetNationalCompetitionQuery,
        GetNationalCompetitionQueryVariables
      >({
        query: GetNationalCompetitionDocument,
        variables,
      });

      if (isNotFound(response)) {
        return notFound();
      }

      return response.data.nationalCompetition;
    },
    {
      tags: [
        getIdTag(`${variables.competitionSlug}-${variables.skillSlug}`, "nationalCompetitions"),
      ],
      revalidate: 60 * 60,
    }
  )();
}

