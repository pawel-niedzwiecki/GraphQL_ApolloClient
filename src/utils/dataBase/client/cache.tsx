import { InMemoryCache } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    character: {
      keyFields: ["id", "name", "image", "status", "species", "type", "created", "episode", ["id", "name"]],
    },
  },
});
