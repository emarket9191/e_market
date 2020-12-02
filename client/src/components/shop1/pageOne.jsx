import React, {useEffect, useState} from "react";
 import IconLabelButtons from "./Button";
import Input from "../shop-page2/input";
import DescriptionTextField from "../shop1/TextFile";
import "../shop1/pageOne.css";
import NestedGrid from "./category";
import {getAllCategories} from "../../api/index"
import ContainedButtons from "../shop1/NextPageButton"
import RecipeReviewCard from "./c"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft:20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PageOne() {
  const [state,setState]=useState([]);
const uploadAllCategory=async()=>{
  const response = await getAllCategories();
  const categoryArray = response.data.data;
  setState(categoryArray);
}
  useEffect(()=>{
    uploadAllCategory();
  },[])
  const foodsrc= process.env.PUBLIC_URL + '/food.jpg'; 
  const sports= process.env.PUBLIC_URL + '/sports.jpg'; 
  const show= process.env.PUBLIC_URL + '/show.jpg'; 
  const jwlsrc= process.env.PUBLIC_URL + '/jwl.jpg'; 

  const classes = useStyles();
  return (
    <div className = "papaDiv">

      <div>
      <h1>Create new shop</h1>
      </div>

      <div className = "Input">
        <Input name ={`Shop Name`}/>
        <Input name ={`Shop Logo`}/>
      </div>

      <div>
        <DescriptionTextField name ={`Shop Description`}/>
       
     </div>
     <div>
       <p>select categories for your shop</p>
        <div className="Categories">
         <div id="boxed">

         <Card className={classes.root}>
      <CardHeader
        title="Food"
      />
      <CardMedia
        className={classes.media}
        image={foodsrc}
        title="Paella dish"
      />
        </Card>
        <Card className={classes.root}>
      <CardHeader
        title="Sport"
      />
      <CardMedia
        className={classes.media}
        image={sports}
        title="Paella dish"
      />
        </Card>
        <Card className={classes.root}>
      <CardHeader
        title="Shoes"
      />
      <CardMedia
        className={classes.media}
        image={show}
        title="Paella dish"
      />
        </Card>
        <Card className={classes.root}>
      <CardHeader
        title="Jewelry"
      />
      <CardMedia
        className={classes.media}
        image={jwlsrc}
        title="Jewelry"
      />
        </Card>
           
         </div>
         
        </div>
     </div>

      <div className = "Buttons">
      <IconLabelButtons/>
      </div>
      <div className = "NextButton">
      <ContainedButtons/>
      </div>
       
    </div>
  );
}

