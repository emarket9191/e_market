import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Input from "./input";
import TradeTerms from "./tradeTerms";
import "./page2.css";

function index() {
  return (
    <div className="App">
      <h1>Shop Details</h1>
      <div className="input">
        <Input name={`shop name`} />
        <Input name={`shop fax`} />
        <Input name={`shop country`} />
        <Input name={`shop city`} />
        <Input name={`shop zip code`} />
        <div className="shop2container">
          <div>
            <Input name={`business address`} />
            <Input name={`business number`} />
          </div>
          <div className="images">
            <Input name={`Add Background Image`} />
          </div>
        </div>
      </div>
      <div className="images">
        <Input name={`Add Header Image`} />
      </div>
      <h2>services</h2>
      <div className='shop2container'>
        <span id='span'>Shipping:</span>Free
        <LocalShippingIcon /> 
      </div>
      <TradeTerms/>
      <div color="red">payment: NOT AVAILABLE</div>
    </div>
  );
}
export default index;
