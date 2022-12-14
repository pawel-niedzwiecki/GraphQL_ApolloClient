import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import { ComponentListTypes, ComponentStatusEnumTypes } from "./component.status.types";

export const Status = styled.div<ComponentListTypes>`
  display: block;
  font-weight: bold;
  width: max-content;
  position: relative;
  font-size: 1rem;
  border-radius: 1.5rem;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => `${theme.break.small} ${theme.break.main}`};
  background: ${({ theme, type }: { theme: MainSettingsTemplate; type: ComponentStatusEnumTypes }) =>
    type === ComponentStatusEnumTypes.succes ? theme.colorSucces : theme.colorMainBackGround};
`;
