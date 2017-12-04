// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';

export class SignIn extends React.Component {
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
  
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <Grid>
          <Row className='show-name'>
            <Col sm={8} md={6}><Button onClick={this.authenticate} >Sign In</Button></Col>
            <Col sm={8} md={6}><h1>Sign Up</h1></Col>
          </Row>
        </Grid>
      </div>
    );
  }
};
