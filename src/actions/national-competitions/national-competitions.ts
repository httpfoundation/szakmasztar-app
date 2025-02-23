"use server";

import { notFound } from "next/navigation";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import {
  GetActiveNationalCompetitionsDocument,
  GetActiveNationalCompetitionsQuery,
  GetActiveSkillsJuniorCompetitionsDocument,
  GetActiveSkillsJuniorCompetitionsQuery,
  GetNationalCompetitionDocument,
  GetNationalCompetitionQuery,
  GetNationalCompetitionQueryVariables,
  GetNationalCompetitionsDocument,
  GetNationalCompetitionsQuery,
  GetNationalCompetitionsQueryVariables,
  NationalCompetitionFragment,
} from "./national-competition.generated";

export async function getNationalCompetitions(take = 20, skip = 0) {
  const response = await graphqlClient.query<
    GetNationalCompetitionsQuery,
    GetNationalCompetitionsQueryVariables
  >({
    query: GetNationalCompetitionsDocument,
    variables: { take, skip },
  });

  return response.data.nationalCompetitions;
}

export async function getActiveNationalCompetitions() {
  const response = await graphqlClient.query<GetActiveNationalCompetitionsQuery>({
    query: GetActiveNationalCompetitionsDocument,
  });

  return response.data.activeNationalCompetitions;
}

export async function getActiveSkillsJuniorCompetitions() {
  const response = await graphqlClient.query<GetActiveSkillsJuniorCompetitionsQuery>({
    query: GetActiveSkillsJuniorCompetitionsDocument,
  });

  return response.data.activeSkillsJuniorCompetitions;
}

export async function getNationalCompetition(
  variables: GetNationalCompetitionQueryVariables
): Promise<NationalCompetitionFragment> {
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
}

