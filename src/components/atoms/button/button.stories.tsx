import React from "react";

import { Container, Row, Col } from "components/molecules/gridSystem";
import { ColComponentPropsTypes } from "./component.button.types";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "GridSystem/Col",
  component: Col,
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args: ColComponentPropsTypes): JSX.Element => (
  <Container>
    <Row>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
      <Col {...args}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
    </Row>
  </Container>
);

export const xs = Template.bind({});
xs.args = {
  xs: 1,
};

export const sm = Template.bind({});
sm.args = {
  sm: 1,
};

export const md = Template.bind({});
md.args = {
  md: 1,
};

export const lg = Template.bind({});
lg.args = {
  lg: 1,
};

export const xl = Template.bind({});
xl.args = {
  xl: 1,
};

export const xxl = Template.bind({});
xxl.args = {
  xxl: 1,
};
