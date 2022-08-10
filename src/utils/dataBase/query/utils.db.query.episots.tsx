import { gql } from "@apollo/client";

const GET_EPISODES = gql`
  query getEpisodes($id: ID) {
    character(id: $id) {
      episode {
        id
        name
      }
    }
  }
`;
