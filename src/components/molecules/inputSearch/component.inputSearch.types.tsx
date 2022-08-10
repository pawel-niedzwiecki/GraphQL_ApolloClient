export interface SugestSearchType {
  url: string;
  name: string;
}

export type ValueDefaultSearchType = string;

export interface ComponentInputSearchPropsTypes {
  callBack?: (arg: string) => void;
  sugests?: SugestSearchType[] | null;
  valueDefault?: ValueDefaultSearchType;
}
