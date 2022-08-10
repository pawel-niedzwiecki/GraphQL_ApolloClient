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
  border-bottom-left-radius: ${({ sugests }: InputType) => (sugests ? "0rem" : "3rem")};
  border-bottom-right-radius: ${({ sugests }: InputType) => (sugests ? "0rem" : "3rem")};
`;
export const Sugests = styled.div`
  width: 100%;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
  background: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorSucces};

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
