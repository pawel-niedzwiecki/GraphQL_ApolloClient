import { mergePagination } from "./caseMerge";
import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    characters: {
      keyFields: ["id", "name", "image", "status", "species", "type", "created", "episode", ["id", "name"]],
    },
    Query: {
      fields: {
        characters: mergePagination(["filter"]),
      },
    },
  },
});
