export enum ComponentStatusEnumTypes {
  succes = "succes",
  desactive = "desactive",
}

export interface ComponentStatusPropsTypes {
  statusName: string;
  type: ComponentStatusEnumTypes;
}

export interface ComponentListTypes {
  type: ComponentStatusEnumTypes;
}
