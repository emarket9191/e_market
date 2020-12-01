import React, { useEffect, useState } from "react";
import Input from "./components/shop-page2/input";
import PageOne from "./components/shop1/pageOne";
import ProductManagement from "./ProductManagement/ProductManagement";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Router>
        
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/openShop" exact component={PageOne} />
          <Route path="/productManagement" exact component={ProductManagement} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
