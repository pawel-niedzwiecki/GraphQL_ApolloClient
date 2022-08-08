import styled from "styled-components";
import { ContainerComponentStyleTypes } from "./component.container.types";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

const Container = styled.div<ContainerComponentStyleTypes>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: ${({ theme }): string => theme.break.main};
  padding-right: ${({ theme }: { theme: MainSettingsTemplate }): string => theme.break.main};
  max-width: ${({ theme, size }: { theme: MainSettingsTemplate; size?: string }): string => (size === "full" ? "100%" : theme.max_width)};
`;

// Export new style
export default Container;
