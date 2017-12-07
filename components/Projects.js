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
      search: '',
      projects: {
        names: [],
        desc: [],
        goal: [],
        funding: []
      }
    };
    this.createLayout = this.createLayout.bind(this);
    this.createPage = this.createPage.bind(this);
    this.searchFor = this.searchFor.bind(this);
  }

  // Gets projects from database and asigns them to the components state
  componentWillMount() {
    const refProjects = fire.database().ref().child('Projects');
    refProjects.on('child_added', snap => {
      var name = snap.child("Name").val();
      var desc = snap.child("Desc").val();
      var goal = snap.child("Goal").val();
      var funding = snap.child("Funding").val();
      this.state.projects.names.push(name);
      this.state.projects.desc.push(desc);
      this.state.projects.goal.push(goal);
      this.state.projects.funding.push(funding);
    })
  };

  searchFor(newSearch) {
    this.setState({ search: newSearch });
    let projects = this.state.projects;
    if(newSearch !== '') {
      let newProjects = {
        names: [],
        desc: [],
        goal: [],
        funding: []
      };
      for(let i = 0; i < projects.names.length; i++){
        let len = newSearch.length;
        if (projects.names[i].substring(0, len) === newSearch) {
          newProjects.names.push(projects.names[i]);
          newProjects.desc.push(projects.desc[i]);
          newProjects.goal.push(projects.goal[i]);
          newProjects.funding.push(projects.funding[i]);
        }
      }
      this.state.projects = newProjects;
    }
  }

  createLayout() {
    let projects = this.state.projects;
    let rows = [];
    let size = projects.names.length;
    let names = projects.names;
    let desc = projects.desc;
    let goal = projects.goal;
    let funding = projects.funding;
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
    console.log(p);
    let size = this.state.projects.names.length;
    let names = this.state.projects.names;
    let desc = this.state.projects.desc;
    let goal = this.state.projects.goal;
    let funding = this.state.projects.funding;
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
            <Col xs={6} md={4}><SearchBar onChange={this.searchFor}/></Col>
          </Row>
          {this.createLayout()}
        </Grid>
      </div>
    );
  }
};
