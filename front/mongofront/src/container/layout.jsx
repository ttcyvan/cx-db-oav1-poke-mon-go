import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import BodyContainer from "./bodyContainer"

function Layout(){
    return(
    <React-Fragment>
      <Container>
        <Row>
          <Col xs="6" sm="4"></Col>
          <Col xs="6" sm="4">
            <Header/>
          </Col>
          <Col sm="4"></Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs="6" sm="2"></Col>
          <Col xs="6" sm="8">
            <BodyContainer/>
          </Col>
          <Col sm="2"></Col>
        </Row>
      </Container>
    </React-Fragment>
    )
}

export default Layout;


