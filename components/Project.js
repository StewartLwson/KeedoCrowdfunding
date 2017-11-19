// Importing React
import React from 'react';

// Importing ReactBootstrap components
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Project Title",
      desc: "Project Description",
      media: "./app/image/keedo_logo.png",
      funding: 50
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Thumbnail src={this.state.media} alt="242x200" />
        <ProgressBar now={this.state.funding} label={`${this.state.funding}%`} />
        <p>{this.state.desc}</p>
      </div>
    );
  }
}
