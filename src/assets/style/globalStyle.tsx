import * as styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

type GlobalStyleProps = {
  theme: MainSettingsTemplate;
};

const GlobalStyle = styled.createGlobalStyle<GlobalStyleProps>`
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
    color: ${({ theme }) => theme.colorWhite};
    background-color: ${({ theme }) => theme.colorMainBackGround};
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
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
`;

export default GlobalStyle;
