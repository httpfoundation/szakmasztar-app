import { ApolloLink, HttpLink } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { env } from "@/env";

export const httpLink = new HttpLink({
  uri: env.GRAPHQL_BASE,
});

export const errorLink = new ApolloLink((operation, forward) => {
  loadDevMessages();
  loadErrorMessages();
  return forward(operation).map((response) => {
    if (response.errors) {
      console.error(response.errors);
    }
    return response;
  });
});

export const siteLink = setContext(({}, prevContext) => {
  return {
    headers: { ...prevContext.headers, site: env.SITE_ID },
  };
});

export const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: "no-cache", errorPolicy: "ignore" },
    query: { fetchPolicy: "no-cache", errorPolicy: "all" },
  },
  link:
    typeof window === "undefined"
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          siteLink,
          errorLink,
          httpLink,
        ])
      : ApolloLink.from([siteLink, errorLink, httpLink]),
});
