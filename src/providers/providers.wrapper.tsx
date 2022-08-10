import React from "react";
import Img from "next/image";
import texture from "assets/image/bg.png";
import settings from "assets/style/settings";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import ProviderSearch from "providers/providers.search";
import { client } from "utils/dataBase/client/apollo-client";

interface ProviderWrapperType {
  children?: JSX.Element | JSX.Element[];
}

const ProviderWrapper: React.FC<ProviderWrapperType> = ({ children }: ProviderWrapperType): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <ProviderSearch>
        <ThemeProvider theme={settings}>
          <Img src={texture} layout="fill" style={{ zIndex: "-1", opacity: 0.5 }} />
          {children}
        </ThemeProvider>
      </ProviderSearch>
    </ApolloProvider>
  );
};

export default ProviderWrapper;
