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
  const [categories,setCategories]=useState([]);
 useEffect(()=>{
  setCategories(props.array)
 },[])
  const classes = useStyles();

   
  function FormRow(props) {
    const category = props.name;
    return (
      <React.Fragment>
        <Grid item xs={5}>
          {/* <button id = "categoryButton" type="button" class="btn btn-success">{category}</button>       */}
    
          <div className={`category category-${category}`}>
          <button id = "categoryButton" type="button" class="btn btn-primary">{category}</button>

          </div>
        </Grid>
      </React.Fragment>
    );
  }

  return (  
    <div className={classes.root}>
      <Grid container spacing={0}>
      
      {categories.map((category)=>
               <Grid container item xs={4} spacing={1}>
               <FormRow name={category.category_name}/>         
              </Grid>
            )}
        {/* <Grid container item xs={4} spacing={1}>
         <FormRow name="food"/>         
        </Grid> */}
        
      </Grid>
    </div>
  );
}