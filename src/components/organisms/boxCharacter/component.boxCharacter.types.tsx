import { ComponentStatusEnumTypes } from "components/atoms/status/component.status.types";

export interface ComponentBoxCharacterPropsTypes {
  statusType?: ComponentStatusEnumTypes;
  statusName: string;
  nameCharacter: string;
  srcImage: null | string;
  params?: string[] | null;
  url?: string;
}
