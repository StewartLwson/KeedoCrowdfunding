// Importing React
import React from 'react';

// Importing ReactBootstrap components
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Button from 'react-bootstrap/lib/Button';

export class Project extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind();
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    const now = this.props.perc;

    return (

      <div>
        <h2>{this.props.name}</h2>
        <Thumbnail src='./app/image/keedo_logo.png' alt='242x200' />
        <ProgressBar now={now} label={`${now}%`} />
        <p>{this.props.desc}</p>
        <Button onClick={this.handleClick} >View more...</Button>
      </div>
    );
  }
}
