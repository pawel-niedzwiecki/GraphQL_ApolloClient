import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Header = styled.header`
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => `${theme.break.small} ${theme.break.main}`};

  .logo {
    width: 15rem;
    display: block;
    position: relative;

    svg {
      display: block;
      max-width: 100%;
    }
  }

  ul {
    margin-left: auto;
    li {
      padding-top: 0;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  display: block;
  position: relative;
  margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} 0;

  @media all and (min-width: 768px) {
    width: calc(100% - 55rem);
    margin: 0 ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  }
`;

export const Hamburger = styled.div`
  width: 5rem;
  display: flex;
  height: 3.7rem;
  margin-left: auto;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 0.3rem;
    display: block;
    background: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};
  }

  @media all and (min-width: 768px) {
    display: none;
  }
`;

interface BoxForMobileTypes {
  display: boolean;
}

export const BoxForMobile = styled.div<BoxForMobileTypes>`
  width: 100%;
  flex-wrap: wrap;
  display: ${({ display }) => (display ? "flex" : "none")};

  @media all and (min-width: 768px) {
    display: flex;
    width: calc(100% - 15rem);
  }
`;
