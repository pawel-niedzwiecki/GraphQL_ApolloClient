import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import {} from "./component.boxCharacter.types";

export const Box = styled.ul`
  width: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem;
  margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small} 0;
  border: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};

  ul {
    display: block;
    padding-left: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
    li {
      padding-left: 0;
    }
  }

  a {
    margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main}
      ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main}
      ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} auto;
  }
`;

export const NameCharacter = styled.h3`
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;
