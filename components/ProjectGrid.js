// Importing React
import React from 'react';

// Importing component specific components
import { Project } from './Project';

// Importing ReactBootstrap grid components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

// Importing other ReactBootstrap components
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export const ProjectGrid = () => {
  return (
    <Grid>
      <Row className='show-grid'>
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}></Col>
      <Col xs={6} md={4}>
        <Form inline>
          <FormGroup controlId="formInlineSearch">
            <FormControl type="text" placeholder="Search for a project..." />
            {' '}
            <Button type="submit"><Glyphicon glyph="search" /></Button>
          </FormGroup>
        </Form>
      </Col>
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
  );
}
