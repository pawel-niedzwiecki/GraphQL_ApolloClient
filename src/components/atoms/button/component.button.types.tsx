export interface ButtonSwitch {
  disable: boolean;
}

export interface ButtonTypes {
  id?: string;
  title?: string;
  disable?: boolean;
  onClick?: () => void;
  children: JSX.Element | string;
}

export interface ButtonLinkTypes extends ButtonTypes {
  href: string;
}
