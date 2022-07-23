import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillsTable = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={4}>
          <h3>Skill 1</h3>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <h3>Skill 2</h3>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <h3>Skill 3</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsTable;
