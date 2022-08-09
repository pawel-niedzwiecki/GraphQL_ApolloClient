import React from "react";
import BoxCharacter from "./component.boxCharacter";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container, Row, Col } from "components/molecules/gridSystem";
import { ComponentStatusEnumTypes } from "components/atoms/status/component.status.types";
import { ComponentBoxCharacterPropsTypes } from "./component.boxCharacter.types";

export default {
  title: "Box/BoxCharacter",
  component: BoxCharacter,

  argTypes: {
    statusType: { options: [ComponentStatusEnumTypes.desactive, ComponentStatusEnumTypes.succes], control: "select" },
    statusName: { control: "text" },
    nameCharacter: { control: "text" },
    url: { control: "text" },
    srcImage: { control: "text" },
  },
} as ComponentMeta<typeof BoxCharacter>;

const Template: ComponentStory<typeof BoxCharacter> = (args: ComponentBoxCharacterPropsTypes): JSX.Element => (
  <Container>
    <Row>
      <Col xs={12} sm={6} md={4} lg={3}>
        <BoxCharacter {...args} />
      </Col>
    </Row>
  </Container>
);
export const Main = Template.bind({});
Main.args = {
  url: "/character/1",
  statusName: "ALIFE",
  nameCharacter: "Rick",
  params: [<>param 1</>, <>param 2</>],
  srcImage: "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
  statusType: ComponentStatusEnumTypes.succes,
};
