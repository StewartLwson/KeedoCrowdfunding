import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Project } from './Project';
import { SearchBar } from './SearchBar';


export class Projects extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
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
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
          </Row>
          <Row className='show-grid'>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
          </Row>
          <Row className='show-grid'>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
            <Col xs={6} md={4}><Project onSelect={this.props.onSelect} funding={parseInt(Math.random() * (100 - 60) + 60) + 1}/></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
