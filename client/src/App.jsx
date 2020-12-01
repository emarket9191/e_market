import React, { useEffect, useState } from "react";
import Input from "./components/shop-page2/input";
import PageOne from "./components/shop1/pageOne";
import Container from "./components/shop-page2/container";
import ProductManagement from "./ProductManagement/ProductManagement";
import Page3 from './components/page3/page3'
import logo from "./logo.svg";
 import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/openShop" exact component={PageOne} />
          <Route
            path="/productManagement"
            exact
            component={ProductManagement}
          />
          <Route path="/openShop2" exact component={Container} />
          <Route path="/openShop3" exact component={Page3} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
