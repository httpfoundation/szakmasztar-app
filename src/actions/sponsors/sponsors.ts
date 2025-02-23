"use server";

import { notFound } from "next/navigation";
import { graphqlClient } from "@/lib/client";
import { isNotFound } from "@/lib/utils";
import {
  GetSponsorDocument,
  GetSponsorQuery,
  GetSponsorQueryVariables,
  GetSponsorsCardDataDocument,
  GetSponsorsCardDataQuery,
  GetSponsorsCardDataQueryVariables,
  SponsorDetailFragment,
} from "./sponsors.generated";

export async function getSponsor(
  variables: GetSponsorQueryVariables
): Promise<SponsorDetailFragment> {
  const response = await graphqlClient.query<GetSponsorQuery, GetSponsorQueryVariables>({
    query: GetSponsorDocument,
    variables,
  });

  if (isNotFound(response)) {
    return notFound();
  }

  return response.data.sponsor;
}

export async function getSponsorsCardData() {
  const response = await graphqlClient.query<
    GetSponsorsCardDataQuery,
    GetSponsorsCardDataQueryVariables
  >({
    query: GetSponsorsCardDataDocument,
  });
  const {
    currentCompetition: currentCompetitionSponsors,
    nextCompetition: nextCompetitionSponsors,
  } = response.data;
  const sponsors = [...currentCompetitionSponsors.sponsors, ...nextCompetitionSponsors.sponsors]
    .filter((item, idx, arr) => arr.findIndex((x) => x.id === item.id) === idx)
    .sort((a, b) => a.name.localeCompare(b.name));
  return sponsors;
}

