import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Button = styled.a`
  display: block;
  font-weight: bold;
  position: relative;
  width: max-content;
  border-radius: 3rem;
  color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorWhite};
  border: 0.3rem solid ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorSucces};
  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => `${theme.break.small} ${theme.break.big}`};

  &:hover {
    color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorWhite};
    background-color: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.colorSucces};
  }
`;
