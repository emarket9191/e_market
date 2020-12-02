import React, { useEffect, useState } from "react";
import Input from "./components/shop-page2/input";
import PageOne from "./components/shop1/pageOne";
import Container from "./components/shop-page2/container";
import ProductManagement from "./ProductManagement/ProductManagement";
import Page3 from './components/page3/page3'
import Login from './components/login/login'
import logo from "./logo.svg";
import "./App.css";
import addProduct1 from "./components/add-product1/pageOne"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInSide from "./components/login/login"
import AddProductTwo from "./components/add-product2/addProductTwo"
import { StateContext, useStatesGlobal } from "./state"


function App() {
  return (
    <StateContext.Provider value={useStatesGlobal()}>
    <div className='App'>
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/addProduct1" exact component={addProduct1} />
          <Route path="/addProduct2" exact component={AddProductTwo} />
          <Route path="/productManagement"exact component={ProductManagement}/>
          <Route path="/openShop" exact component={PageOne} />
          <Route path="/openShop2" exact component={Container} />
          <Route path="/openShop3" exact component={Page3} />
          <Route path="/" exact component={SignInSide} />
        </Switch>
      </Router>
    </div>
    </StateContext.Provider>
  );
}
export default App;
