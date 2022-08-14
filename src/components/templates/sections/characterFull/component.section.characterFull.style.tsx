import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Section = styled.section`
  overflow: hidden;
  border-radius: 0.6rem;
  border: 0.3rem solid white;
  min-height: calc(100vh - 10rem);
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
`;

export const NameCharacter = styled.h1`
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const Header = styled.h4`
  display: block;
  text-align: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const Button = styled.button`
  display: block;
  font-weight: bold;
  position: relative;
  width: max-content;
  border-radius: 3rem;
  margin: 0 auto;
  background-color: transparent;
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorWhite};
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => `${theme.break.small} ${theme.break.big}`};
  border: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorSucces};

  &:hover {
    color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorWhite};
    background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorSucces};
  }
`;

export const BoxResult = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => `${theme.break.big} ${theme.break.main}`};

  li {
    width: 100%;
    display: block;
    text-align: center;
  }
`;
