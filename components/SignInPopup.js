import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

import Popover from 'react-bootstrap/lib/Popover';

export const SignInPopup = () =>{
  return (
    <Popover
      id="popover-basic"
      placement="top"
      positionLeft={200}
      positionTop={50}
      title="Sign In"
    />
  )
}
