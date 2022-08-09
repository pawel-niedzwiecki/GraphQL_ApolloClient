export enum ComponentBoxImageEnumTypes {
  thumbnail = "thumbnail",
  full = "full",
}

export interface ComponentBoxImagePropsTypes {
  url?: string | null;
  type: ComponentBoxImageEnumTypes;
}

export interface ComponentBoxTypes {
  type: ComponentBoxImageEnumTypes;
}
