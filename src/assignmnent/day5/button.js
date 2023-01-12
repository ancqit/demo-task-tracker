import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {

  return (
      <Button variant="contained" type='submit' disabled={props.disabled}>{props.title}</Button>
  );
}