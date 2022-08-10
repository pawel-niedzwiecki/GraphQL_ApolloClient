import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const Section = styled.section`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: stretch;
  box-sizing: border-box;
  -ms-flex-line-pack: stretch;
  -webkit-align-content: stretch;
  margin-left: ${({ theme }: { theme: MainSettingsTemplate }): string => `-${theme.break.main}`};
  margin-right: ${({ theme }: { theme: MainSettingsTemplate }): string => `-${theme.break.main}`};
`;