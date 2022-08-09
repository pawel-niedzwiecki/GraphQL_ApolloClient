import React from "react";
import BoxImage from "./component.boxImage";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentBoxImagePropsTypes, ComponentBoxImageEnumTypes } from "./component.boxImage.types";

export default {
  title: "Box/Image",
  component: BoxImage,
  argTypes: {
    type: {
      options: [ComponentBoxImageEnumTypes.full, ComponentBoxImageEnumTypes.thumbnail],
      control: { type: "radio" },
    },
    url: { control: "text" },
  },
} as ComponentMeta<typeof BoxImage>;

const Template: ComponentStory<typeof BoxImage> = (args: ComponentBoxImagePropsTypes): JSX.Element => <BoxImage {...args} />;

export const Full = Template.bind({});
Full.args = {
  type: ComponentBoxImageEnumTypes.full,
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  type: ComponentBoxImageEnumTypes.thumbnail,
};
