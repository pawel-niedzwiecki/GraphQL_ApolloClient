import React from "react";
import InputSearch from "./component.inputSearch";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {} from "./component.inputSearch.types";

export default {
  title: "Input/Search",
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const Template: ComponentStory<typeof InputSearch> = (): JSX.Element => <InputSearch />;

export const Desactive = Template.bind({});
