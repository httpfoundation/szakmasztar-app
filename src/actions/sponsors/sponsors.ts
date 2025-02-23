"use server";

import { notFound } from "next/navigation";
import { getGlobalTag, getIdTag, gqlCache } from "@/lib/cache";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import {
  GetSponsorDocument,
  GetSponsorQuery,
  GetSponsorQueryVariables,
  GetSponsorsDocument,
  GetSponsorsQuery,
  GetSponsorsQueryVariables,
  SponsorDetailFragment,
} from "./sponsors.generated";

export const getSponsors = gqlCache(
  async () => {
    const response = await graphqlClient.query<GetSponsorsQuery, GetSponsorsQueryVariables>({
      query: GetSponsorsDocument,
      variables: { take: 1000 },
    });

    return response.data.sponsors.data;
  },
  { tags: [getGlobalTag("sponsors")], revalidate: 60 * 60 }
);

export async function getSponsor(
  variables: GetSponsorQueryVariables
): Promise<SponsorDetailFragment> {
  return gqlCache(
    async () => {
      const response = await graphqlClient.query<GetSponsorQuery, GetSponsorQueryVariables>({
        query: GetSponsorDocument,
        variables,
      });

      if (isNotFound(response)) {
        return notFound();
      }

      return response.data.sponsor;
    },
    { tags: [getIdTag(variables.articleSlug, "sponsors")], revalidate: 60 * 60 }
  )();
}

