import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ProductTable from "./ProductTable";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { grey } from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    weight: 5,
    width: 150,
    backgroundColor: grey[600],
    color: "primary.contrastText",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 200,
    backgroundColor: grey[300],
    margin: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    height: 30,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
export default function ProductManagement() {
  const classes = useStyles();
  const [controls, setControls] = React.useState({});
  return (
    <div>
      <h1 className="ProductManagementTitle">Product Management</h1>
      <div className="ProductButtonContainer">
        <Button
          id="gerybutton"
          className={classes.button}
          variant="contained"
          disableElevation
          size="small"
          onClick={() => {
            console.log("ghghghghghgh")
            const isSorted= true;
            setControls((oldValue) => {
              return {
                ...oldValue,
                isSorted,
              };
            });
          }}
        >
          Last Edited
        </Button>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="search product"
            inputProps={{ "aria-label": "search product" }}
            value={controls.textSearch}
            onChange={(e) => {
              const textSearch = e.target.value;
              setControls((oldValue) => {
                return {
                  ...oldValue,
                  textSearch,
                };
              });
            }}
          />

          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="search category"
            inputProps={{ "aria-label": "search category" }}
          />

          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="search subcategory"
            inputProps={{ "aria-label": "search category" }}
          />

          <Divider className={classes.divider} orientation="vertical" />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button
          id="AddProductButton"
          className={classes.button}
          variant="contained"
          disableElevation
        >
          Add Product
        </Button>
      </div>
      <div className="ProductContainer">
        <ProductTable controls={controls} />
      </div>
    </div>
  );
}
