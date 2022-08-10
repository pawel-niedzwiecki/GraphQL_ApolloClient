import React from "react";
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
        <ThemeProvider theme={settings}>{children}</ThemeProvider>
      </ProviderSearch>
    </ApolloProvider>
  );
};

export default ProviderWrapper;
