export type MainSettingsTemplate = {
  colorWhite: string;
  colorSucces: string;
  colorDesactive: string;
  colorMainBackGround: string;

  break: { small: string; main: string; big: string };
  breakPoint: { type: string; break: string }[];
  gridCol: number;
  max_width: string;
};
