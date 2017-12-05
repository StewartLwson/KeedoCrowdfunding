// Importing React
import React from 'react';

// Importing ReactBootstrap components
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  showAdvanced() {
    this.setState({ showAdvanced: true });
  }

  handleSelect() {
    this.props.onSelect(5);
  }

  render() {
    let percent = (this.props.funding/this.props.max * 100).toFixed(0);
    let project = (parseInt(Math.random() * (this.props.title.length))).toFixed(0);
    let imageIndex = (parseInt(Math.random() * (this.props.media.length))).toFixed(0);
    return (
      <div onClick={this.handleSelect}>
        <h2>{this.props.title[project]}</h2>
        <Thumbnail src={this.props.media[imageIndex]} alt="242x200" />
        <div style={{display: this.props.showAdvanced ? 'block' : 'none'}}>
        <ProgressBar bsStyle={(percent != 100)?"":"success"} now={percent} label={`${percent}%`} />
        </div>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

Project.defaultProps = {
  title: ["Android App", "Music App", "Data Analysis", "Society Project", "Security System", "Robotics",
  "Research", "Video", "Game", "Web App", "Website", "iPhone App", "Rasberry Pi", "Arduino", "Java App",
  "C# App", "Python App", "Podcast"],
  desc: "Project Description",
  media: ['./app/image/vr_image.jpeg', './app/image/app_image.jpeg', './app/image/raspberry_pi_image.jpeg', './app/image/data_analysis_image.jpeg',
   './app/image/music_app_image.jpeg', './app/image/python_app_image.jpeg', './app/image/security_system_image.jpg', './app/image/society_project_image.jpeg' ],
  goal: parseInt(Math.random() * (5000 - 60) + 60) + 1,
  funding: parseInt(Math.random() * (100 - 60) + 60) + 1,
  max: 100,
  showAdvanced: true
};
