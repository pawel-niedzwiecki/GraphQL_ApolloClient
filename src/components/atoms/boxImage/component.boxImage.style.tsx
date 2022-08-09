import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import { ComponentBoxTypes, ComponentBoxImageEnumTypes } from "./component.boxImage.types";

export const Box = styled.ul<ComponentBoxTypes>`
  width: 100%;
  display: block;
  position: relative;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorDesactive};

  height: ${({ type }: { type: ComponentBoxImageEnumTypes }) => (type === ComponentBoxImageEnumTypes.thumbnail ? "15rem" : "15rem")};

  @media all and (min-width: 570px) {
    height: ${({ type }: { type: ComponentBoxImageEnumTypes }) => (type === ComponentBoxImageEnumTypes.thumbnail ? "15rem" : "25rem")};
  }

  @media all and (min-width: 768px) {
    height: ${({ type }: { type: ComponentBoxImageEnumTypes }) => (type === ComponentBoxImageEnumTypes.thumbnail ? "15rem" : "37rem")};
  }
`;

export const Demo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  position: relative;
  align-items: center;
  justify-content: center;
`;
