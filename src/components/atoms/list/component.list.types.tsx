export enum ConponentListEnumTypes {
  vertical = "vertical",
  level = "level",
}

export interface ComponentListPropsTypes {
  selector?: string;
  children: JSX.Element[];
  type: ConponentListEnumTypes;
}

export interface ComponentListTypes {
  type: ConponentListEnumTypes;
}
