"use server";

import { cache } from "react";
import { notFound } from "next/navigation";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import {
  GetSkillDocument,
  GetSkillQuery,
  GetSkillQueryVariables,
  GetSkillsDocument,
  GetSkillsQuery,
  GetSkillsQueryVariables,
  SkillFragment,
} from "./skills.generated";

export const getSkill = cache(async (variables: GetSkillQueryVariables): Promise<SkillFragment> => {
  const response = await graphqlClient.query<GetSkillQuery, GetSkillQueryVariables>({
    query: GetSkillDocument,
    variables,
  });

  if (isNotFound(response)) {
    return notFound();
  }

  return response.data.skill;
});

export async function getSkills(): Promise<SkillFragment[]> {
  const response = await graphqlClient.query<GetSkillsQuery, GetSkillsQueryVariables>({
    query: GetSkillsDocument,
  });

  return response.data.skills;
}

