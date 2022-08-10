import { LayoutPropsTypes } from "./layout.types";
import HeadImg from "assets/image/head.png";
import PlanetImg from "assets/image/planet.png";
import Img from "next/image";
import styled from "styled-components";
import Header from "components/templates/header/component.header";
import { Container, Row, Col } from "components/molecules/gridSystem";

const StickyBox = styled.div`
  display: none;

  @media all and (min-width: 1140px) {
    top: 3rem;
    display: block;
    position: sticky;

    span {
      left: -3rem;
    }
  }
`;

export default function Layout({ children }: LayoutPropsTypes): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={12} xl={1} style={{ overflow: "unset", position: "relative" }}>
            <StickyBox style={{ marginTop: "2rem", top: "1rem" }}>
              <Img src={HeadImg} layout="fixed" width={141} height={171} alt="" />
            </StickyBox>
          </Col>
          <Col xs={12} xl={10}>
            {children}
          </Col>
          <Col md={12} xl={1} style={{ overflow: "unset", position: "relative" }}>
            <StickyBox style={{ marginTop: "60rem", top: "40rem" }}>
              <Img src={PlanetImg} layout="fixed" width={100} height={90} alt="" />
            </StickyBox>
          </Col>
        </Row>
      </Container>
    </>
  );
}
