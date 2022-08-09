import * as styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

const GlobalStyle = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    line-height: 1.2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: normal;
    color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorWhite};
    background-image: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorMainBackGround};
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  a,
  span,
  strong {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  input,
  textarea {
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b,
  strong {
    font-weight: bold;
  }

  h1 {
    font-size: 3.8rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2.8rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.5rem;
  }

  svg {
    transition: all 0.3s;
    fill: ${({ theme }) => theme.colorWhite};
  }

  a {
    opacity: 1;
    transition: all 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.colorSucces};

    &:hover {
      color: ${({ theme }) => theme.colorSucces};

      svg {
        fill: ${({ theme }) => theme.colorSucces};
      }
    }
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  section {
    width: 100%;
    display: block;
    position: relative;
  }

  input {
    width: 100%;
    border: none;
    max-width: 100%;
    position: relative;
    border-radius: 3rem;
    background: transparent;
    color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorWhite};
    border: 3px solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorSucces};
    padding: ${({ theme }: { theme: MainSettingsTemplate }): string => `${theme.break.small} ${theme.break.main}`};

    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
