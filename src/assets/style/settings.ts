import { MainSettingsTemplate } from "utils/types/utils.types.mainSettingsTemplate";

const settings: MainSettingsTemplate = {
  // settings color
  colorWhite: "#FFFFFF",
  colorSucces: "#318841",
  colorDesactive: "#AFAFAF",
  colorMainBackGround:
    "linear-gradient(90deg, rgba(44,90,114,1) 0%, rgba(23,30,40,1) 38%, rgba(30,31,39,1) 45%, rgba(51,33,37,1) 87%, rgba(52,33,37,1) 100%);",

  // settings break
  break: { small: "0.75rem", main: "1.5rem", big: "3rem" },

  // settings breakpoint
  breakPoint: [
    { type: "xs", break: "0px" },
    { type: "sm", break: "540px" },
    { type: "md", break: "768px" },
    { type: "lg", break: "960px" },
    { type: "xl", break: "1140px" },
    { type: "xxl", break: "1320px" },
  ],

  gridCol: 12,

  // settings max width
  max_width: "128rem",
};

export default settings;
