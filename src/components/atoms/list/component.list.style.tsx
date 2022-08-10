import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import { ComponentListTypes, ConponentListEnumTypes } from "./component.list.types";

export const List = styled.ul<ComponentListTypes>`
  display: flex;
  width: max-content;
  position: relative;
  flex-wrap: ${({ type }: ComponentListTypes) => (type === ConponentListEnumTypes.level ? "nowrap" : "wrap")};
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  position: relative;
  white-space: nowrap;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};

  span {
    padding-right: 0.3rem;
    color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorDesactive};
  }
`;
