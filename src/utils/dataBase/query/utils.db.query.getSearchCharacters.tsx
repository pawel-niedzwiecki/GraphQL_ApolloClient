import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query Search($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        next
        count
        pages
      }
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
