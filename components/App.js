// Importing React
import React from 'react';

//Importing different page components
import { AppNavbar } from './Navbar';
import { Home } from './Home';
import { Projects } from './Projects';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    const page = this.state.page;

    let display = null;
    if (page === 1) {
      display = <Home />
    } else if (page === 2) {
      display = <Projects />
    } else {
      display = <Home />
    }

    return (
      <div>
        <AppNavbar onSelect={this.changePage}/>
        {display}
      </div>
    );
  }
}
