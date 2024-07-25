import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Add } from './action';

export default function Input() {
  const [Input,setInput]=useState("");
  let dispach=useDispatch();

  const submitForm=(e)=>{
    e.preventDefault();
    dispach(Add(Input));
    e.target.reset();
  };
  return (
    <>
      <h1>Input</h1>
     <form onSubmit={submitForm}>
      <input type="text" placeholder='Enter TODO' onChange={(e)=>setInput(e.target.value) }/><br/><br/>
      <button>ADD TO DO</button>
     </form>
    </>
  )
}
