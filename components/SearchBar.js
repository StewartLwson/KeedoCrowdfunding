// Importing React
import React from 'react';

// Importing other ReactBootstrap components
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props),
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(e) {
    this.props.onChange(e.target.value);
  }

  render () {
    return (
      <Form inline>
        <FormGroup controlId="formInlineSearch">
          <FormControl onChange={this.handleUserInput} type="text" placeholder="Search for a project..." />
          {' '}
          <Button type="submit"><Glyphicon glyph="search" /></Button>
        </FormGroup>
      </Form>
    );
  }
}
