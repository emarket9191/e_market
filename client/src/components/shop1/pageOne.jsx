import React, {useEffect, useState} from "react";
 import IconLabelButtons from "./Button";
import Input from "../shop-page2/input";
import DescriptionTextField from "../shop1/TextFile";
import "../shop1/pageOne.css";
import NestedGrid from "./category";
import {getAllCategories} from "../../api/index"

export default function PageOne() {
  const [state,setState]=useState([]);
  const [name,setName]= useState('');
  const [logo,setLogo]= useState('');
  const [description,setDescription]= useState('');
  const [selected,setSelected]= useState();
  
  const nameChange = (event) => {
    setName(event.target.value);
  };
  
  const logoChange = (event) => {
    setLogo(event.target.value);
  };
  
  const descriptionChange = (event) => {
    setDescription(event.target.value);
  };
  
  const selectedChange = (event) => {
    setSelected(event.target.value);
  };
const uploadAllCategory=async()=>{
  const response = await getAllCategories();
  const categoryArray = response.data.data;
  setState(categoryArray);
}
  useEffect(()=>{
    uploadAllCategory();
  },[])
  return (
    <div className = "papaDiv">

      <div>
      <h1>Create new shop.</h1>
      </div>

      <div className = "Input">
        <Input name ={`shop Name`} />
        <Input name ={`shop Logo`}/>
      </div>

      <div>
        <DescriptionTextField name ={`shop Description`}/>
       
     </div>
     <div>
       <p>select categories for your shop.</p>
        <div className="Categories">
         <div id="boxed">
           <div id="anotherbox">
             {/* <input type="button" value="inside" />   */}
             {state.length&&<NestedGrid array={state} />}
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

