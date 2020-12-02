import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Input from "./input";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import TradeTerms from "./tradeTerms";
import Popover from "./popover";
import Box from "@material-ui/core/Box";
import FileUpload from './fileUpload'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Shop Details</h1>

      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Input name={`shop name`} />
        </Grid>
        <Grid item xs={4}>
          <Popover text="Header color" />
        </Grid>
        <Grid item xs={7}>
          <Input name={`shop fax`} />
        </Grid>
        <Grid item xs={4}>
          <Popover text="Bottom color" />
        </Grid>
        <Grid item xs={7}>
          <Input name={`shop country`} />
        </Grid>
        <Grid item xs={4}>
          {/* <Input name={`Add Header Image`} /> */}
          <FileUpload/>
        </Grid>
        <Grid item xs={7}>
          <Input name={`shop city`} />
        </Grid>
        <Grid item xs={4}>
          {/* <Input name={`Add bottom Image`} /> */}
          <FileUpload/>
        </Grid>
        <Grid item xs={7}>
          <Input name={`shop zip code`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`business address`} />
        </Grid>
        <Grid item xs={7}>
          <Input name={`business number`} />
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}><Input/></Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
