import React from "react";
import Status from "./component.status";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentStatusPropsTypes, ComponentStatusEnumTypes } from "./component.status.types";

export default {
  title: "Status/Status",
  component: Status,
  argTypes: {
    type: {
      options: [ComponentStatusEnumTypes.desactive, ComponentStatusEnumTypes.succes],
      control: { type: "radio" },
    },
    statusName: { control: "text" },
  },
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args: ComponentStatusPropsTypes): JSX.Element => <Status {...args} />;

export const Desactive = Template.bind({});
Desactive.args = {
  type: ComponentStatusEnumTypes.desactive,
  statusName: "dead",
};

export const Succes = Template.bind({});
Succes.args = {
  type: ComponentStatusEnumTypes.succes,
  statusName: "alive",
};
