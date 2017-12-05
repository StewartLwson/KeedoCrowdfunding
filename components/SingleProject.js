// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import Image from 'react-bootstrap/lib/Image';

import { Project } from './Project';

export class SingleProject extends React.Component {
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
            <Col sm={6}><Project showAdvanced={false}/></Col>
            <Col sm={6}>
              <br />
              <br />
              <br />
              <h3>Goal: £ {this.props.goal}</h3>
              <h4>Raised: £ 5000</h4>
              <h3> Donaters: {this.props.donaters}</h3>
              <h3>Date Added: {this.props.date}</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2>About</h2>
              <p>{this.props.about}</p>
              <div>
                <img className="center-block" alt="242x200" src={this.props.media} width="70%"/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

SingleProject.defaultProps = {
  goal: parseInt(Math.random() * (5000 - 60) + 60) + 1,
  donaters: parseInt(Math.random() * 100),
  date: '7th June 2017',
  media: "./app/image/keedo_logo.png",
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};
