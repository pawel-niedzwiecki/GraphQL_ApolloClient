import { gql } from "@apollo/client";

export const GET_SEARCH_CHARACTERS = gql`
  query Search($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      results {
        id
        name
        image
        status
        species
        type
        created
      }
    }
  }
`;
