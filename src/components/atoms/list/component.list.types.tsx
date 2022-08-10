export enum ConponentListEnumTypes {
  vertical = "vertical",
  level = "level",
}

export interface ComponentListPropsTypes {
  style?: {};
  selector?: string;
  children: JSX.Element[] | JSX.Element | null;
  type: ConponentListEnumTypes;
}

export interface ComponentListTypes {
  type: ConponentListEnumTypes;
}
