import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "./input";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import TradeTerms from "./tradeTerms";
import Popover from "./popover";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Add Product 2</h1>

      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Input name={`Package dimension`} />
        </Grid>
        <Grid item xs={4}>
        <Input name={`+Add Product Image`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`Package weight`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`Price per unit`} />
        </Grid>
        <Grid item xs={4}>
          <Input name={`+Add product collage`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`Unit in package`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`Quantity in stock`} />
        </Grid>
        <Grid item xs={4}>
          <Input name={`Add bottom Image`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`Social media link`} />
        </Grid>
      </Grid>
    </div>
  );
}
