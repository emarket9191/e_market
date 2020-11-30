import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ProductTable from './ProductTable'



const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },

  }));

export default function ProductManagement(){
    const classes = useStyles();
    return (
        <div>
            <h1 className="ProductManagementTitle">
            Product Management
            </h1>
            <div className="ProductButtonContainer">
        <Button className="GreyButton" variant="contained" disableElevation size="small" >
      Last Edited
    </Button>
    <Button
        size="small"
        variant="contained"
        className={classes.button}
        endIcon={<SearchIcon />} 
      >
        Search Product
      </Button>
      <Button
        size="small"
        variant="contained"
        className={classes.button}
        endIcon={<SearchIcon />} 
      >
        Search Category
      </Button>
      <Button
        size="small"
        variant="contained"
        className={classes.button}
        endIcon={<SearchIcon />} 
      >
        Search SubCategory
      </Button>
      <Button id="AddProductButton" className="GreyButton" variant="contained" disableElevation >
      Add Product
    </Button>
            </div>
        <div className="ProductContainer">
            <ProductTable/>
        </div>  
        </div>
    )
}