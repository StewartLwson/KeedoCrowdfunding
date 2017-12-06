// Importing React
import React from 'react';

// Importing ReactBootstrap components
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["Android App", "Music App", "Data Analysis", "Society Project", "Security System", "Robotics",
      "Research", "Video", "Game", "Web App", "Website", "iPhone App", "Rasberry Pi", "Arduino", "Java App",
      "C# App", "Python App", "Podcast"],
      desc: "Project Description",
      media: "./app/image/keedo_logo.png",
      funding: parseInt(Math.random() * (100 - 60) + 60) + 1,
      max: 100,  
    };
  }

  render() {
    let percent = (this.state.funding/this.state.max * 100).toFixed(0);
    let project = (parseInt(Math.random() * (this.state.title.length))).toFixed(0)
    return (
      <div>
        <h2>{this.state.title[project]}</h2>
        <Thumbnail src={this.state.media} alt="242x200" />
        <ProgressBar bsStyle={(percent != 100)?"":"success"} now={percent} label={`${percent}%`} />
        <p>{this.state.desc}</p>
      </div>
    );
  }
}
