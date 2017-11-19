// Importing React
import React from 'react';

// Importing ReactBootstrap grid components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export const ProjectGrid = () => {
  return (
    <Grid>
      <Row className='show-grid'>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}></Col>
      </Row>
    </Grid>
  );
}
