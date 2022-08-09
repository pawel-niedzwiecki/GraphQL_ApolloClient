import React from "react";
import { Header } from "./component.header.style";
import Logo from "assets/icon/logo.svg";
import { ComponentHeaderPropsTypes } from "./component.header.types";

const ComponentHeader = (): JSX.Element => {
  return (
    <Header>
      <Logo />
    </Header>
  );
};

export default ComponentHeader;
