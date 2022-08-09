export interface SugestSearchType {
  url: string;
  name: string;
}

export type ValueDefaultSearchType = string;

export interface ComponentInputSearchPropsTypes {
  sugests?: SugestSearchType[];
  callBack?: (arg: string) => void;
  valueDefault?: ValueDefaultSearchType;
}
