import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import {} from "./component.boxCharacter.types";

export const Box = styled.div`
  width: 100%;
  height: calc(100% - 3rem);
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem;
  margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main} 0;
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
