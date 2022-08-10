import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($id: ID!) {
    character(id: $id) {
      episode {
        id
        name
      }
    }
  }
`;
