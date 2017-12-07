import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import { Project } from './Project';

export class ProjectGrid extends React.Component {
  render() {
    let rows = [];
    let size = this.props.size;
    let height = size / 3;
    for(let i = 0; i < height; i++) {
      let cell = [];
      for(let j = 0; j < 3; j++) {
        cell.push(<Col xs={6} md={4}><Project name="Default" desc="Default" key={height + "" + j} /></Col>);
      }
      rows.push(<Row>{cell}</Row>);
    }

    return(
      <Grid>
      {rows}
      </Grid>
    )
  }
}
