import React, {useEffect, useState} from "react";
 import IconLabelButtons from "./Button";
import Input from "../shop-page2/input";
import DescriptionTextField from "../shop1/TextFile";
import "../shop1/pageOne.css";
import NestedGrid from "./category";


export default function PageOne() {
  const [state,setState]=useState([]);
const uploadAllCategory=async()=>{
  const response = await getAllCategories();
  const array =response.data.data;
  setState(array);
}
  useEffect(()=>{
    uploadAllCategory();
  },[])
  return (
    <div>

      <div>
      <h1>Create new shop.</h1>
      </div>

      <div className = "Input">
        <Input name ={`Shop Name`}/>
        <Input name ={`Shop Logo`}/>
      </div>

      <div>
        <DescriptionTextField name ={`Shop Description`}/>
       
     </div>
     <div>
       <p>select categories for your shop.</p>
        <div className="Categories">
         <div id="boxed">
           <div id="anotherbox">
             {/* <input type="button" value="inside" />   */}
             <NestedGrid />
           </div>
         </div>
         
        </div>
     </div>

      <div className = "Buttons">
      <IconLabelButtons/>
      </div>
      
    </div>
  );
}

