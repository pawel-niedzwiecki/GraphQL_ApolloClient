import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import { ComponentListTypes, ComponentStatusEnumTypes } from "./component.status.types";

export const Status = styled.ul<ComponentListTypes>`
  display: block;
  width: max-content;
  position: relative;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => `${theme.break.small} ${theme.break.main}`};
  background-color: ${({ theme, type }: { theme: MainSettingsTemplate; type: ComponentStatusEnumTypes }) =>
    type === ComponentStatusEnumTypes.succes ? theme.colorSucces : theme.colorDesactive};
`;
