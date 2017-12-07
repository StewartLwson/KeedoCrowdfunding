// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Image from 'react-bootstrap/lib/Image';

import { Project } from './Project';

export class ProjectFull extends React.Component {
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
          <Row>
            <Col sm={6}>
              <br />
              <br />
              <br />
              <h3>Goal: £ </h3>
              <h4>Raised: </h4>
              <h3> Donaters: </h3>
              <h3>Date Added: </h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>About</h2>
              <p></p>
              <div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
