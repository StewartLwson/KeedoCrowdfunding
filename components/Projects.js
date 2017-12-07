import React from 'react';

// Initializing firebase
import fire from '../fire';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Project } from './Project';
import { SearchBar } from './SearchBar';
import { ProjectFull } from './ProjectFull';

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      names: [],
      desc: [],
      goal: [],
      funding: []
    };
    this.createLayout = this.createLayout.bind(this);
    this.createPage = this.createPage.bind(this);
  }

  // Gets projects from database and asigns them to the components state
  componentWillMount() {
    const refProjects = fire.database().ref().child('Projects');
    refProjects.on('child_added', snap => {
      var name = snap.child("Name").val();
      var desc = snap.child("Desc").val();
      var goal = snap.child("Goal").val();
      var funding = snap.child("Funding").val();
      this.state.names.push(name);
      this.state.desc.push(desc);
      this.state.goal.push(goal);
      this.state.funding.push(funding);
    })
  };

  createLayout() {
    let rows = [];
    let size = this.state.names.length;
    let names = this.state.names;
    let desc = this.state.desc;
    let goal = this.state.goal;
    let funding = this.state.funding;
    let height = size / 3;
    let count = size;
    for(let i = 0; i < height; i++) {
      let cols;
      if (count <= 3 && count % 3 === 1) {
        cols = 1;
      } else if (count <= 3 && count % 3 === 2) {
        cols = 2;
      } else {
        cols = 3;
      }
      count -= 3;
      let cell = [];
      for(let j = 0; j < cols; j++) {
        let current = (i * 3) + j;
        cell.push(<Col xs={6} md={4}><Project
          name={names[current]}
          desc={desc[current]}
          perc={funding[current]/goal[current] * 100}
          onClick={this.createPage}
          id={current}/>
        </Col>);
      }
      rows.push(<Row>{cell}</Row>);
    }
    return rows;
  }

  createPage(p) {
    console.log("Hey");
    let size = this.state.names.length;
    let names = this.state.names;
    let desc = this.state.desc;
    let goal = this.state.goal;
    let funding = this.state.funding;
    return <ProjectFull name={names[p]} desc={desc[p]} perc={funding[p]/goal[p] * 100} />;
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <Grid key={1}>
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
          {this.createLayout()}
        </Grid>
      </div>
    );
  }
};
