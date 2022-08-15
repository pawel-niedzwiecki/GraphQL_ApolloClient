import React, { useContext, useEffect, useState, useCallback, FormEvent } from "react";
import Link from "next/link";
import Logo from "assets/icon/logo.svg";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import List from "components/atoms/list/component.list";
import { SearchContext } from "providers/providers.search";
import Button from "components/atoms/button/component.button";
import { Container, Row } from "components/molecules/gridSystem";
import { Header, Form, Hamburger, BoxForMobile } from "./component.header.style";
import InputSearch from "components/molecules/inputSearch/component.inputSearch";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";
import { GET_CHARACTERS } from "utils/dataBase/query/utils.db.query.getSearchCharacters";
import { CharactersDataType } from "utils/types/db/query/types.db.query.characters";
import { CharacterType } from "utils/types/db/query/types.db.query.character";

const ComponentHeader = (): JSX.Element => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const { querySearch, setQuerySearch } = useContext(SearchContext);

  const [getQuery, { data, loading }] = useLazyQuery<CharactersDataType>(GET_CHARACTERS, {
    variables: { page: 1, name: querySearch },
  });

  useEffect(() => {
    if (!!querySearch?.length) getQuery();
  }, [querySearch, getQuery]);

  const goToPageSearch = useCallback(
    (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      router.push(`/search/${querySearch}`);
    },
    [querySearch, router]
  );

  return (
    <Header>
      <Container>
        <Row>
          <Link href="/">
            <a className="logo" title="Rick & Morty (Home)">
              <Logo />
            </a>
          </Link>
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
          <BoxForMobile power={menuOpen}>
            <Form action="/search" onSubmit={(e: FormEvent<HTMLFormElement>): void => goToPageSearch(e)}>
              <InputSearch
                valueDefault={querySearch}
                callBack={(name: string): void => setQuerySearch(name)}
                sugests={
                  !loading && !!querySearch?.length
                    ? data?.characters?.results
                        ?.map((character: CharacterType, _: number) => {
                          return {
                            name: character.name,
                            url: `/character/${character.id}`,
                          };
                        })
                        ?.slice(0, 5)
                    : null
                }
              />
            </Form>
            <List type={ConponentListEnumTypes.level}>
              <Button href="/" title="Home">
                Home
              </Button>
              <Button href="https://github.com/pawel-niedzwiecki/GraphQL_ApolloClient" title="source">
                Source
              </Button>
            </List>
          </BoxForMobile>
        </Row>
      </Container>
    </Header>
  );
};

export default ComponentHeader;
