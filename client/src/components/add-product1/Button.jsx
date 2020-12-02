import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<CancelIcon />}
      >
        Cancel
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
    
     
      <Button
        variant="contained"
        color="primary"       
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    
    </div>
  );
}