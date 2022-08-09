import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Pagination = styled.ul`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  width: max-content;
  align-items: flex-end;

  span {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.3rem;
  }
`;

export const Item = styled.li`
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
`;
