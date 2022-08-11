import type { NextPage } from "next";
import { SearchContext } from "providers/providers.search";
import React, { useContext, useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "utils/dataBase/query/utils.db.query.characters";

import { QueryResult } from "components/molecules/queryResult/component.queryResult";
import { ComponentSectionCharactersList } from "components/templates/sections";

interface PageSearchPropsTypes {
  search: string;
}

const PageSearch: NextPage<PageSearchPropsTypes, JSX.Element> = (props: PageSearchPropsTypes): JSX.Element => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(props.search);
  const { querySearch, setQuerySearch } = useContext(SearchContext);

  const { loading, data, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page, name: query },
  });

  useEffect(() => {
    if (!!querySearch?.length) setQuery(querySearch);
  }, [querySearch, data]);

  return (
    <QueryResult loading={loading} data={data} error={error}>
      <ComponentSectionCharactersList data={data} />
    </QueryResult>
  );
};

interface PropsTypes {
  props: { search: string };
}

export async function getServerSideProps({ params }: { params: { search: string } }): Promise<PropsTypes> {
  return {
    props: {
      search: params.search,
    },
  };
}

export default PageSearch;
