import type { NextPage } from "next";
import { ApolloQueryResult } from "@apollo/client";
import { client } from "utils/dataBase/client/apollo-client";

import { ComponentSectionCharactersList } from "components/templates/sections";
import { GET_CHARACTER } from "utils/dataBase/query/utils.db.query.character";
import { CharacterType, CharacterDataType } from "utils/types/db/query/types.db.query.character";

interface PageHomePropsTypes {
  data: CharacterDataType;
}

const Home: NextPage<PageHomePropsTypes, JSX.Element> = ({ data }: { data: CharacterDataType }): JSX.Element => {
  return (
    <>
      id: {data?.character?.id} name: {data?.character?.name}
    </>
  );
};

interface PropsTypes {
  props: { data: CharacterDataType };
}

export async function getServerSideProps({ params }: { params: { id: string } }): Promise<PropsTypes> {
  const { data } = await client.query({ query: GET_CHARACTER, variables: { id: params.id } });

  return {
    props: {
      data,
    },
  };
}

export default Home;
