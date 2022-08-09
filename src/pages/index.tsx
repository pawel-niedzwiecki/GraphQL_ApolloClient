import type { NextPage } from "next";
import { Container, Row, Col } from "components/molecules/gridSystem";

import Loader from "./";

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
            {/* <Load loading={true} /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
