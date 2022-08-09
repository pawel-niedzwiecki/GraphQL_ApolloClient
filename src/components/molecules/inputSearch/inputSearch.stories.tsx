import React from "react";
import InputSearch from "./component.inputSearch";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentInputSearchPropsTypes } from "./component.inputSearch.types";

export default {
  title: "Input/Search",
  component: InputSearch,
  argTypes: {
    sugests: { control: "object" },
    valueDefault: { control: "text" },
    callBack: { control: "function" },
  },
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (args: ComponentInputSearchPropsTypes): JSX.Element => <InputSearch {...args} />;

export const Main = Template.bind({});
Main.args = {
  sugests: [],
  valueDefault: "",
};

export const WithSugests = Template.bind({});
WithSugests.args = {
  sugests: [
    { name: "Rick", url: "/character/1" },
    { name: "Morty", url: "/character/2" },
  ],
  valueDefault: "R",
};

export const WithCallBack = Template.bind({});
WithCallBack.args = {
  sugests: [
    { name: "Rick", url: "/character/1" },
    { name: "Morty", url: "/character/2" },
  ],
  valueDefault: "R",
  callBack: (args: string) => {
    alert(args);
  },
};
