import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
import NavItem from 'react-bootstrap/lib/NavItem';
import Image from 'react-bootstrap/lib/Image';

export const AppNavbar = () => {
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
          <NavItem eventKey={1} href="#">Projects</NavItem>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  )
}
