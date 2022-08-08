import styled from "styled-components";
import { ContainerComponentStyleTypes } from "./component.container.types";

const Container = styled.div<ContainerComponentStyleTypes>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: ${({ theme }) => theme.break.main};
  padding-right: ${({ theme }) => theme.break.main};
  max-width: ${({ theme, size }) => (size === "full" ? "100%" : theme.max_width)};
`;

// Export new style
export default Container;
