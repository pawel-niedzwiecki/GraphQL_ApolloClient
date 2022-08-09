export enum ComponentBoxImageEnumTypes {
  thumbnail = "thumbnail",
  full = "full",
}

export interface ComponentBoxImagePropsTypes {
  src?: string | null;
  type: ComponentBoxImageEnumTypes;
}

export interface ComponentBoxTypes {
  type: ComponentBoxImageEnumTypes;
}
