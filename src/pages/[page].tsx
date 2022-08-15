import type { NextPage } from "next";
import { client } from "utils/dataBase/client/apolloClient";
import { CharactersDataType } from "utils/types/db/query/types.db.query.characters";
import { CharacterType } from "utils/types/db/query/types.db.query.character";
import { GET_CHARACTERS } from "utils/dataBase/query/utils.db.query.getSearchCharacters";
import Pagination from "components/organisms/pagination/component.pagination";
import { ComponentSectionCharactersList } from "components/templates/sections";
import { ApolloQueryResult } from "@apollo/client";

interface PageHomePropsTypes {
  data: CharactersDataType;
}

const Home: NextPage<PageHomePropsTypes, JSX.Element> = ({ data }: { data: CharactersDataType }): JSX.Element => {
  return (
    <>
      <ComponentSectionCharactersList data={data} />

      <Pagination
        url="/"
        paginationSize={4}
        pageCount={data?.characters?.info?.pages || 1}
        pageActive={data?.characters?.info?.next - 1 || 0}
      />
    </>
  );
};

interface PropsTypes {
  props: { data: CharactersDataType };
}

export async function getStaticProps({ params }: { params: { page: string } }): Promise<PropsTypes> {
  const { data } = await client.query({ query: GET_CHARACTERS, variables: { page: parseInt(params.page), name: "" } });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths({ params }: any): Promise<any> {
  const count: ApolloQueryResult<CharactersDataType> = await client.query({ query: GET_CHARACTERS, variables: { page: 1, name: "" } });

  const paths = count?.data?.characters?.results.map((character: CharacterType, i: number) => ({
    params: { page: `${i + 1}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Home;
