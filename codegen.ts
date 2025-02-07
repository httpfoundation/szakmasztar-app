import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from "./src/env";

const config: CodegenConfig = {
  overwrite: true,
  schema: [{ [env.GRAPHQL_BASE]: { headers: { site: env.SITE_ID } } }],
  documents: "**/*.{gql,graphql}",
  generates: {
    "src/types.generated.ts": {
      plugins: ["typescript", { add: { content: "/* eslint-disable */" } }],
    },
    src: {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: [
        "typescript-operations",
        "typed-document-node",
        { add: { content: "/* eslint-disable */" } },
      ],
    },
  },
};

export default config;

