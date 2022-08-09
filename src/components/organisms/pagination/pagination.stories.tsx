import React from "react";

import Pagination from "./component.pagination";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Pagination/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args): JSX.Element => <Pagination />;

export const Main = Template.bind({});
