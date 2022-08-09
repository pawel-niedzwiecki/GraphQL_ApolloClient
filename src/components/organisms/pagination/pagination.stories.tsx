import React from "react";
import Pagination from "./component.pagination";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PaginationPropsTypes } from "./component.pagination.types";

export default {
  title: "Pagination/Pagination",
  component: Pagination,
  argTypes: {
    url: {
      options: ["", "/page"],
      control: { type: "radio" },
    },
    paginationSize: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: "select" },
    },
    pageCount: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: "select" },
    },
    pageActive: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args: PaginationPropsTypes): JSX.Element => <Pagination {...args} />;

export const Main = Template.bind({});
Main.args = {
  url: "/page",
  paginationSize: 3,
  pageCount: 10,
  pageActive: 3,
};
