import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      
    },
  },
}));

export default function TextFieldSizes(props) {
  const classes = useStyles();
const name=`${props.name}`
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label={name}
          id="outlined-size-small"
          variant="outlined"
          size="small"
        />
      </div>
    </form>
  );
}
