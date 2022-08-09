import type { NextPage } from "next";
import { Container, Row, Col } from "components/molecules/gridSystem";

import Button from "components/atoms/button/component.button";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            ok
            <Button href="/" title="test">
              kliknij
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
