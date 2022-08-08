import React from "react";
import Img from "next/image";
import texture from "assets/image/bg.png";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";

interface ProviderWrapperType {
  children?: JSX.Element | JSX.Element[];
}

const ProviderWrapper: React.FC<ProviderWrapperType> = ({ children }: ProviderWrapperType): JSX.Element => {
  return (
    <ThemeProvider theme={settings}>
      <Img src={texture} layout="fill" style={{ zIndex: "-1", opacity: 0.5 }} />
      {children}
    </ThemeProvider>
  );
};

export default ProviderWrapper;
