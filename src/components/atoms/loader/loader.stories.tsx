import React from "react";
import Loader from "./component.loader";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Loader/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (): JSX.Element => <Loader />;

export const Main = Template.bind({});
