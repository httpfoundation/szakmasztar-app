import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    GRAPHQL_BASE: z
      .string()
      .min(1)
      // .default("https://szakmavilag-backend.httpf.hu/graphql"),
      .default("http://127.0.0.1:4000/graphql"),
    ARTICLES_CATEGORY_ID: z.string().default("szakmasztar-app-articles"),
    SITE_ID: z.string().default("szakmasztar-app-site"),
    SITE_BASE: z.string().min(1).default("http://localhost:3010"),
    API_KEY: z.string().min(1).default(""),
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
  client: {},
  experimental__runtimeEnv: {},
});

