import styled from "styled-components";
import { ButtonSwitch } from "./component.button.types";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Button = styled.a<ButtonSwitch>`
  display: block;
  font-weight: bold;
  position: relative;
  width: max-content;
  border-radius: 3rem;
  cursor: ${({ disable }: { disable: boolean }): string => (disable ? "no-drop" : "pointer")};
  color: ${({ theme, disable }: { theme: MainSettingsTemplate; disable: boolean }): string =>
    disable ? theme.colorDesactive : theme.colorWhite};
  border: 0.3rem solid
    ${({ theme, disable }: { theme: MainSettingsTemplate; disable: boolean }): string =>
      disable ? theme.colorDesactive : theme.colorSucces};

  padding: ${({ theme }: { theme: MainSettingsTemplate }): string => `${theme.break.small} ${theme.break.big}`};

  &:hover {
    color: ${({ theme, disable }: { theme: MainSettingsTemplate; disable: boolean }): string =>
      disable ? theme.colorDesactive : theme.colorWhite};
    background-color: ${({ theme, disable }: { theme: MainSettingsTemplate; disable: boolean }): string =>
      disable ? "" : theme.colorSucces};
  }
`;
