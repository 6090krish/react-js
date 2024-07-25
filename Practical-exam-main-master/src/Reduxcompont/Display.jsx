import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Delete,Edit} from "./action"

export default function Display() {
  let Dataa =useSelector((state)=>state);
  let dispatch=useDispatch();

  const DeleteToDo=(i)=>{
    dispatch(Delete(i));
  };
  
  const EditTODO=(index,newValue)=>{
    dispatch(Edit({index,newValue}));
  };

  const toggleComplete=(index)=>{
    const newValue =Dataa[index].includes("- Complete")
    ?Dataa[index].replace("- Complete","")
    :Dataa[index] + "- Complete";
    EditTODO(index,newValue);
  }

  return (
    <>
      <h1>Display</h1>

      {
        Dataa.map((ele,i)=>(
          <div 
            key={i} 
            style={{textDecoration 
            : ele.includes("- Complete")
            ?"line-through":"none",}}>

            <li onClick={()=>toggleComplete(i)}>{ele}</li>
            <button 
              onClick={()=>{
              const newValue=prompt("Enter New Value");
              if(newValue !== null){
                EditTODO(i,newValue);
              }
            }}>Edit</button>
            <button onClick={()=>DeleteToDo(i)}>Delete</button>
          </div>
        ))
      }
    </>
  );
}
