import React from "react";
import Container from "./component.container";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContainerComponentPropsTypes } from "components/atoms/container/component.container.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridSystem/Container",
  component: Container,
  argTypes: {
    size: {
      options: ["full", "normal"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args: ContainerComponentPropsTypes): JSX.Element => (
  <Container {...args}>
    <>JSX ELEMENT</>
  </Container>
);

export const Full = Template.bind({});
Full.args = {
  size: "full",
};

export const Normal = Template.bind({});
Normal.args = {
  size: "normal",
};
