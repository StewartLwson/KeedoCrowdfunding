// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export const SignIn = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid>
        <Row className='show-name'>
          <Col sm={8} md={6}><h1>Sign In</h1></Col>
          <Col sm={8} md={6}><h1>Sign Up</h1></Col>
        </Row>
      </Grid>
    </div>
  )
}
