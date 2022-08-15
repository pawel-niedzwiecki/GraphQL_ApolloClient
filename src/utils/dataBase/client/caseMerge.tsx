import { makeVar, FieldPolicy } from "@apollo/client";

export type Maybe<T> = T | null | undefined;
interface ResultData {
  __ref: string;
}

interface CharactersDataMerge {
  __typename: string;
  info: { count: number | null; next: number | null; pages: number | null };
  results: ResultData[];
}

export function mergePagination(keyArgs?: string[]): FieldPolicy {
  return {
    keyArgs: keyArgs ?? false,
    merge: (existing: Maybe<CharactersDataMerge>, incoming: CharactersDataMerge) => {
      return {
        ...incoming,
        results: existing ? [...existing.results, ...incoming.results] : incoming.results,
      };
    },
  };
}
