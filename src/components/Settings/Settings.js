import React from "react";
import { Row, Col, Input } from "reactstrap";

function Settings() {
  return (
    <div className="header-background">
      <div className="container">
        <Row>
          <h1 className="text-center">Upload Form</h1>
        </Row>
        <Row>
          <Col md="4">
            First Form
            <Input type="file" />
          </Col>
          <Col md="4">
            Second Form
            <Input type="file" />
          </Col>
          <Col md="4">
            Third Form
            <Input type="file" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Settings;
