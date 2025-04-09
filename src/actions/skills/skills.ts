"use server";

import { cache } from "react";
import { notFound } from "next/navigation";
import { getGlobalTag, getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import {
  GetSkillDocument,
  GetSkillQuery,
  GetSkillQueryVariables,
  GetSkillsDocument,
  GetSkillsQuery,
  SkillFragment,
} from "./skills.generated";

export const getSkill = cache(async (variables: GetSkillQueryVariables): Promise<SkillFragment> => {
  return await gqlCache(
    async () => {
      const response = await graphqlClient.query<GetSkillQuery, GetSkillQueryVariables>({
        query: GetSkillDocument,
        variables,
      });

      if (isNotFound(response)) {
        return notFound();
      }

      return response.data.skill;
    },
    { tags: [getIdTag(variables.slug, "skills")], revalidate: 60 * 60 }
  )();
});

export const getSkills = gqlCache(
  async () => {
    const response = await graphqlClient.query<GetSkillsQuery>({
      query: GetSkillsDocument,
    });

    return response.data.skills as SkillFragment[];
  },
  {
    tags: [getGlobalTag("skills")],
    revalidate: 60 * 60,
  }
);
