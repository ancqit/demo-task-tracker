import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(false);
useEffect(()=>{
    if(props.submitClicked>0)handleClick();
},[props.submitClicked]);
  const handleClick = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Form Submitted!"
        action={action}
      />
    </div>
  );
}