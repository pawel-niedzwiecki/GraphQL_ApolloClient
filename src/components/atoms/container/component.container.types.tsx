export interface ContainerComponentStyleTypes {
  size?: string;
}

export interface ContainerComponentPropsTypes {
  style?: {};
  className?: string;
  size?: "full" | "normal";
  children?: JSX.Element | JSX.Element[];
}
