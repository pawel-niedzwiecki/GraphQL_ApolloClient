import React from "react";
import { RowPropsTypes } from "./component.row.types";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container, Row, Col } from "components/molecules/gridSystem";

export default {
  title: "GridSystem/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args: RowPropsTypes): JSX.Element => (
  <Container>
    <Row {...args}>
      <Col xs={12}>
        <p style={{ background: "green", margin: "1rem 0" }}>JSX ELEMENT</p>
      </Col>
    </Row>
  </Container>
);

export const Main = Template.bind({});
