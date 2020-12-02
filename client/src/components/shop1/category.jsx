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
  const foodsrc= process.env.PUBLIC_URL + '/food.jpg'; 
  const fashionsrc= process.env.PUBLIC_URL + '/fashion.png';
  const sportsrc= process.env.PUBLIC_URL + '/sport.jpg';



   
  // function FormRow(props) {
  //   const category = props.name;
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={5}>

  //         <div className={`category category-${category}`}>
  //         {/* <button id = "categoryButton" type="button" class="btn btn-primary">{category}</button>          */}
  //         <img src={imgSrc} width="60px" height="60" class="btn btn-primary"/>

  //         </div>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return (  
    <div className={classes.root}>
      <Grid container spacing={0}>      
       <Grid container item xs={4} spacing={1}>
       <img src={foodsrc} width="80px" height="80px" />
       </Grid>
       <Grid container item xs={4} spacing={1}>
       <img src={fashionsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={sportsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={sportsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={foodsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={foodsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={foodsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={foodsrc} width="80px" height="80px" />
       </Grid> <Grid container item xs={4} spacing={1}>
       <img src={foodsrc} width="80px" height="80px" />
       </Grid>   
      </Grid>
    </div>
  );
}