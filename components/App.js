// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// Importing app specific components
import { AppNavbar } from './Navbar';
import { AppCarousel } from './Carousel';
import { Project } from './Project';
import { SearchBar } from './SearchBar';

export const App = () => {
  return (
    <div>
      <AppNavbar />
      <AppCarousel />
      <br />
      <Grid>
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
