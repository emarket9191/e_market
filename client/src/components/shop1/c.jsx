import React, { Component } from "react";
import { getAllCategories } from "../api/index";

export default function getCategories() {
  state = {     
    categories: [],
  };

 const getAll = getAllCategories
 console.log("************",getAllCategories);
  render(); {
    return (
      <div className="">
      {this.state.categories.map((category) => (
        <div key={category.id}>
          <p className="p">{category.category_name}</p>
         </div>
      ))}
      
    </div>
    )
   
  }
}