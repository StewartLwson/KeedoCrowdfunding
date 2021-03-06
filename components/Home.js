// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// Importing app specific components
import { AppCarousel } from './Carousel';
import { Project } from './Project';
import { SearchBar } from './SearchBar';

export const Home = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid>
        <Row className='show-grid'>
          <Col xs={12} md={8}>
            <h1>Featured Projects</h1>
            <hr />
          </Col>
        </Row>
        <Row className='show-grid'>
          <Col xs={8} md={12}>
            <AppCarousel />
          </Col>
        </Row>
      </Grid>
      <br />
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} md={12}>
            <h1>Most Popular Right Now</h1>
            <hr />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
