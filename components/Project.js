// Importing React
import React from 'react';

// Importing ReactBootstrap components
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

export class Project extends React.Component {

  render() {
    const now = 70;
    return (

      <div>

        <h2>{this.props.name}</h2>
        <Thumbnail src='./app/image/keedo_logo.png' alt='242x200' />
        <ProgressBar now={now} label={`${now}%`} />
        <p>{this.props.desc}</p>
      </div>
    );
  }
}
