export interface ButtonSwitch {
  disable: boolean;
}

export interface ButtonTypes {
  id?: string;
  href: string;
  title?: string;
  disable?: boolean;
  children: JSX.Element | string;
}
