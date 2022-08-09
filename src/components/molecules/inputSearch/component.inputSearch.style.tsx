import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";
import { SugestSearchType } from "./component.inputSearch.types";

export const Wrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

interface InputType {
  sugests: boolean;
}

export const Input = styled.input<InputType>`
  border-bottom-left-radius: ${({ sugests }: InputType) => (sugests ? "0" : "3rem")};
  border-bottom-right-radius: ${({ sugests }: InputType) => (sugests ? "0" : "3rem")};
`;
export const Sugests = styled.div`
  width: 100%;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  background: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorSucces};
  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;

  a {
    width: 100%;
    font-weight: bold;
    color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};

    &:hover {
      opacity: 0.6;
      color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};
    }
  }
`;
