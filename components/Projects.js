import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Project } from './Project';
import { SearchBar } from './SearchBar';

export const Projects = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} md={12}>
            <h1>Projects</h1>
            <hr />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}><SearchBar /></Col>
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
        <Row className='show-grid'>
          <Col xs={6} md={4}><Project /></Col>
          <Col xs={6} md={4}><Project /></Col>
          <Col xs={6} md={4}><Project /></Col>
        </Row>
      </Grid>
    </div>
  );
}
