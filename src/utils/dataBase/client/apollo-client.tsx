import { ApolloClient, HttpLink } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined", // set to true for SSR
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
  cache,
});

export { client };
