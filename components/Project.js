// Importing React
import React from 'react';

import Thumbnail from 'react-bootstrap/lib/Thumbnail';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Project Title",
      desc: "Project Description",
      media: "./app/image/keedo_logo.png"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Thumbnail src={this.state.media} alt="242x200" />
        <p>{this.state.desc}</p>        
      </div>
    );
  }
}
