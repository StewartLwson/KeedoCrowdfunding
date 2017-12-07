import React from 'react';

// Initializing firebase
import fire from '../fire';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Project } from './Project';
import { SearchBar } from './SearchBar';
import { ProjectGrid } from './ProjectGrid';

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      desc: []
    };
  }

  componentWillMount() {
    const refProjects = fire.database().ref().child('Projects');
    refProjects.on('child_added', snap => {
      var name = snap.child("Name").val();
      var desc = snap.child("Desc").val();
      this.state.names.push(name);
      this.state.desc.push(desc);
    })
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <Grid>
          <Row className='show-grid'>
            <Col xs={6} md={12}>
              <h1>Project</h1>
              <hr />
            </Col>
          </Row>
          <Row className='show-grid'>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}><SearchBar /></Col>
          </Row>
          {console.log(this.state.names.length)}
          <ProjectGrid size={this.state.names.length} />
        </Grid>
      </div>
    );
  }
};
