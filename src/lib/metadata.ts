"use server";

import { type Metadata } from "next";
import { getArticle } from "@/actions/articles/articles";
import { env } from "@/env";
import { stripHtmlTags } from "./utils";

export async function getArticleMetadata(slug: string, path: string = ""): Promise<Metadata> {
  const article = await getArticle({ slug });
  const lead = stripHtmlTags(article.lead);

  return {
    title: article.title,
    description: lead,
    metadataBase: new URL(env.SITE_BASE),
    openGraph: {
      title: article.title,
      description: lead,
      type: "article",
      url: `${env.SITE_BASE}${!path ? "" : `/${path}`}/${slug}`,
      images: article.image
        ? [
            {
              url: article.image.url,
              width: 1200,
              height: 900,
              alt: article.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: lead,
      images: article.image ? [article.image.url] : [],
    },
  };
}

