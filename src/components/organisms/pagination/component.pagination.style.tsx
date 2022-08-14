import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Pagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  width: max-content;
  align-items: flex-end;
  margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} auto;

  span {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
  }
`;

export const Item = styled.li`
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
`;
