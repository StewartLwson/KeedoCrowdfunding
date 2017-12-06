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

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import GoogleButton from 'react-google-button';
import GoogleLogout from 'react-google-login';

// Importing other ReactBootstrap components
import Image from 'react-bootstrap/lib/Image';

export class AppNavbar extends React.Component  {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  authenticate() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
    
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return firebase.auth().signInWithRedirect(provider);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
  }

  handleSelect(e) {
    const page = e;
    this.props.onSelect(page);
  }

  render() {
    return(
      <Navbar inverse fixedTop fluid defaultExpanded collapseOnSelect>
        <NavbarHeader>
          <NavbarBrand>
            <Image  src='./app/image/keedo_logo.png'/>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} onSelect={this.handleSelect} href='#'>Home</NavItem>
            <NavItem eventKey={2} onSelect={this.handleSelect} href="#">Projects</NavItem>
            <NavItem eventKey={3} onSelect={this.handleSelect} href="#">Start A Project</NavItem>
            <NavItem eventKey={4} onSelect={this.authenticate} href="#">Sign in with Google</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    );
  }
}