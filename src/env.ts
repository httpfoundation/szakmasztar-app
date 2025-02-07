import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    GRAPHQL_BASE: z
      .string()
      .min(1)
      .default("https://szakmavilag-backend.httpf.hu/graphql"),
    ARTICLES_CATEGORY_ID: z.string().default("szakmasztar-app-articles"),
    SITE_ID: z.string().default("szakmasztar-app-site"),
    SITE_BASE: z.string().min(1).default("http://localhost:3000"),
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
  client: {},
  experimental__runtimeEnv: {},
});
