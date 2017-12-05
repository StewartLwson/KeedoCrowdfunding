// Importing React
import React from 'react';

//Importing different page components
import { AppNavbar } from './Navbar';
import { Home } from './Home';
import { Projects } from './Projects';
import { SignIn } from './SignIn';
import { Submit } from './Submit';
import {SingleProject} from './SingleProject';

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
      display = <Home onSelect={this.changePage}/>;
    } else if (page === 2) {
      display = <Projects onSelect={this.changePage}/>;
    } else if (page === 3) {
      display = <Submit />;
    } else if (page === 4) {
      display = <SignIn />;
    }else{
      display = <SingleProject />;
    }

    return (
      <div>
        <AppNavbar onSelect={this.changePage}/>
        {display}
      </div>
    );
  }
}
