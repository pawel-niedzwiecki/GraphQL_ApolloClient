import React from "react";

import Button from "./component.button";
import { ButtonLinkTypes } from "./component.button.types";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonLinkTypes): JSX.Element => (
  <>
    <Button id="main" {...args}>
      {args.children}
    </Button>
  </>
);

export const Main = Template.bind({});
Main.args = {
  href: "/",
  title: "button/link",
  children: "Link",
};
Main.parameters = {
  pseudo: {
    hover: ["#main"],
  },
};
