// Importing React
import React from 'react';

// Importing component specific components
import { Project } from './Project';

// Importing ReactBootstrap grid components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export const ProjectGrid = () => {
  return (
    <Grid>
      <Row className='show-grid'>
        <Col xs={6} md={4}><Project /></Col>
        <Col xs={6} md={4}><Project /></Col>
        <Col xs={6} md={4}><Project /></Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={6} md={4}><Project /></Col>
        <Col xs={6} md={4}><Project /></Col>
        <Col xs={6} md={4}><Project /></Col>
      </Row>
      <Row className='show-grid'>
        <Col xs={6} md={4}><Project /></Col>
        <Col xs={6} md={4}><Project /></Col>
        <Col xs={6} md={4}><Project /></Col>
      </Row>
    </Grid>
  );
}
