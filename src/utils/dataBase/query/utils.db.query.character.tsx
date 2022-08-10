import { gql } from "@apollo/client";

export const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      created
    }
  }
`;
