import React from "react";
import BoxCharacter from "./component.boxCharacter";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ComponentBoxCharacterPropsTypes } from "./component.boxCharacter.types";

export default {
  title: "Box/BoxCharacter",
  component: BoxCharacter,
} as ComponentMeta<typeof BoxCharacter>;

const Template: ComponentStory<typeof BoxCharacter> = (args: ComponentBoxCharacterPropsTypes): JSX.Element => <BoxCharacter {...args} />;

export const Desactive = Template.bind({});
