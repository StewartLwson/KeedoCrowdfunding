// Importing React
import React from 'react';

//Importing different page components
import { AppNavbar } from './Navbar';
import { Home } from './Home';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page:1 }
    this.changePage = this.changePage.bind(this);
  }

  changePage(newName) {
    this.setState({ name:newName });
  }

  render() {
    return (
      <div>
        <AppNavbar onSelect={this.changePage}/>
        <Home />
      </div>
    );
  }
}
