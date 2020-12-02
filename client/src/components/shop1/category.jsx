import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "./Card"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function NestedGrid(props) {
  const [state,setState]=useState([]);

  const classes = useStyles();
 

  function FormRow(props) {
    const category = props.name;
    return (
      <React.Fragment>
        <Grid item xs={5}>
          <button className={classes.paper}>{category}</button>          
        </Grid>
      </React.Fragment>
    );
  }

  return (  
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid container item xs={4} spacing={1}>
        <FormRow name="food"/>
        <Grid container item xs={4} spacing={1}>
           <FormRow name="health"/>
         </Grid>
         
         </Grid>
         <Grid container item xs={4} spacing={1}>
           <FormRow name="fashion"/>
          
         <Grid container item xs={4} spacing={1}>
           <FormRow name="health"/>
      
         </Grid>
        </Grid>
      </Grid>
    </div>
  );
}