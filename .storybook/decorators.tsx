import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import settings from "./../src/assets/style/settings";
import GlobalStyle from "./../src/assets/style/globalStyle";

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <>
      <ThemeProvider theme={settings}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </>
  );
};

export const globalDecorators = [withTheme];
