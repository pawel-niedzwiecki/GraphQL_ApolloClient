import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container, Row, Col } from "components/molecules/gridSystem";
import { ContainerComponentPropsTypes } from "components/atoms/container/component.container.types";

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
    <Row>
      <Col xs={12}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
    </Row>
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
