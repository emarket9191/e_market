import React, { useEffect, useState } from "react";
import Input from "./components/shop-page2/input";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <h1>Shop Details</h1>
      <div className='page2'>
        <Input name={`shop name`} />
        <Input name={`shop fax`} />
        <Input name={`shop country`} />
        <Input name={`shop city`} />
        <Input name={`shop zip code`} />
        <Input name={`business address`} />
        <Input name={`business number`} />
      </div>
    </div>
  );
}
export default App;
