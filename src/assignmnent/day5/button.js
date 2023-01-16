import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({disabled,title}) {

  return (
      <Button  variant="contained" type='submit' disabled={disabled}>{title}</Button>
  );
}