import React from 'react'
import { useState } from 'react'

export default function Content() {
    const [count,setCount] = useState(5);
  return (
    <>
    <h2 className='mt-5 mb-3'>Count : {count}</h2>
    <button className='btn btn-primary me-2' onClick={()=>{setCount(count + 5)}}>increment</button>
    <button  className='btn btn-danger ms-2' onClick={()=>{setCount(count - 5)}}>decrement</button>
    </>
  )
}
