import { gql } from "@apollo/client";

export const GET_SEARCH_CHARACTERS = gql`
  query Search($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
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
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;
