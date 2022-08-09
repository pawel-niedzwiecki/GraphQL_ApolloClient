import React from "react";

import List from "./component.list";
import { ComponentListPropsTypes, ConponentListEnumTypes } from "./component.list.types";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "List/List",
  component: List,
  argTypes: {
    type: {
      options: [ConponentListEnumTypes.level, ConponentListEnumTypes.vertical],
      control: { type: "radio" },
    },
    selector: { control: "text" },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args: ComponentListPropsTypes): JSX.Element => (
  <List {...args}>
    <>Item 1</>
    <>Item 2</>
    <>Item 3</>
    <>Item 4</>
  </List>
);

export const Vertical = Template.bind({});
Vertical.args = {
  type: ConponentListEnumTypes.vertical,
  selector: "#",
};

export const Level = Template.bind({});
Level.args = {
  type: ConponentListEnumTypes.level,
  selector: "#",
};
