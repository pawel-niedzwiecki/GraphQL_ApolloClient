export enum ComponentStatusEnumTypes {
  succes = "succes",
  desactive = "desactive",
}

export interface ComponentStatusPropsTypes {
  style?: {};
  statusName: string;
  type: ComponentStatusEnumTypes;
}

export interface ComponentListTypes {
  type: ComponentStatusEnumTypes;
}
