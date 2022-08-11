import styled from "styled-components";
import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

export const SpinerWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  display: block;
  margin: 1.5rem auto;
  border-radius: 100%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  &::after {
    content: "";
    width: 2rem;
    height: 2rem;
    top: 0.5rem;
    left: 0.5rem;
    display: block;
    position: absolute;
    border-radius: 100%;

    background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorWhite};
  }
`;

export const Spiner = styled.div`
  width: 8rem;
  height: 8rem;
  display: block;
  position: relative;
  border-radius: 100%;
  border: 0.6rem solid ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorSucces};
`;
