import React from "react";
import Link from "next/link";
import { useState } from "react";
import Logo from "assets/icon/logo.svg";
import List from "components/atoms/list/component.list";
import Button from "components/atoms/button/component.button";
import { ComponentHeaderPropsTypes } from "./component.header.types";
import { Container, Row, Col } from "components/molecules/gridSystem";
import { Header, Form, Hamburger, BoxForMobile } from "./component.header.style";
import InputSearch from "components/molecules/inputSearch/component.inputSearch";
import { ConponentListEnumTypes } from "components/atoms/list/component.list.types";

const ComponentHeader = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <BoxForMobile display={menuOpen}>
            <Form
              action="/search"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("ok");
              }}
            >
              <InputSearch
                callBack={(arg: string) => {
                  console.log(arg);
                }}
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
