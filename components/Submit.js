// Importing React
import React from 'react';

// Importing page formatting components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export const Submit = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Grid>
        <Row className='show-name'>
          <Col sm={8} md={12}><h1>Submit Your Project</h1></Col>
        </Row>
      </Grid>
    </div>
  )
}
