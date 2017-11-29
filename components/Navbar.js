// Importing React
import React from 'react';

// Importing ReactBootstrap navbar components
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavItem from 'react-bootstrap/lib/NavItem';

// Importing other ReactBootstrap components
import Image from 'react-bootstrap/lib/Image';

import { SignIn } from './SignIn';

export class AppNavbar extends React.Component  {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const page = e;
    this.props.onSelect(page);
  }

  render() {
    return(
      <Navbar inverse fixedTop defaultExpanded collapseOnSelect>
        <NavbarHeader>
          <NavbarBrand>
            <Image src='./app/image/keedo_logo.png'/>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse>
          <Nav>
            <NavItem eventKey={1} onSelect={this.handleSelect} href="#">Projects</NavItem>
            <NavItem eventKey={2} onSelect={this.handleSelect} href="#">Start A Project</NavItem>
            <NavItem eventKey={3} onSelect={this.handleSelect} href="#">Sign In</NavItem>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}
