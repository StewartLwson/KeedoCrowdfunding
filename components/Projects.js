import React from 'react';

// Initializing firebase
import fire from '../fire';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Project } from './Project';
import { SearchBar } from './SearchBar';

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ids: [],
      names: []
    };
  }

  componentWillMount() {
    for(let i = 0; i <= 999; i++) {
      let no = i.toString();
      if(no.length == 1) {
        no = "00" + no;
      } else if(no.length == 2) {
        no = "0" + no;
      }
      let projectRef = fire.database().ref('project_names/' + no);
      projectRef.on('value', (snapshot) => {
        if (snapshot.val() !== null) {
          this.setState( {
            ids: this.state.ids.push(snapshot.key),
            names: this.state.names.push(snapshot.val())
          });

        }
      });
    }
    console.log(this.state.ids);
    console.log(this.state.names);
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
};
