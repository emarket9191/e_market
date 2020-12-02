import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Input from "./input";
import TradeTerms from "./tradeTerms";
import Popover from "./popover";
import Grid from "./grid";
import Button from "../shop1/Button";
import Box from "@material-ui/core/Box";
import "./page2.css";

function index() {
  return (
    <div className="shop2container">
      <div className="grid">
        <Grid />
        <div className="bottom">
          <h2>services</h2>
          <div>
            <span id="span">Shipping:</span>
            <LocalShippingIcon /> Free
          </div>
          <TradeTerms />
          <div color="red">payment: NOT AVAILABLE</div>
        </div>
      </div>
      <Button />
    </div>
  );
}
export default index;
