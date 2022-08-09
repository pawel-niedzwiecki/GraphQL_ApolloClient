export enum ComponentBoxImageEnumTypes {
  thumbnail = "thumbnail",
  full = "full",
}

export interface ComponentBoxImagePropsTypes {
  url: string;
  type: ComponentBoxImageEnumTypes;
}

export interface ComponentBoxTypes {
  type: ComponentBoxImageEnumTypes;
}
