import React, { useEffect, useState } from "react";
import Input from "./components/shop-page2/input";
import PageOne from "./components/shop1/pageOne"
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <div>
        <PageOne/>
      </div>

  </div>
    
  );
}
export default App;
