import type { NextPage } from "next";
import { client } from "utils/dataBase/client/apolloClient";
import { CharactersDataType } from "utils/types/db/query/types.db.query.characters";
import { GET_CHARACTERS } from "utils/dataBase/query/utils.db.query.getSearchCharacters";
import Pagination from "components/organisms/pagination/component.pagination";

import { ComponentSectionCharactersList } from "components/templates/sections";

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

export async function getStaticProps(): Promise<PropsTypes> {
  const { data } = await client.query({ query: GET_CHARACTERS, variables: { page: 1, name: "" } });

  return {
    props: {
      data,
    },
  };
}

export default Home;
