import React, { useContext, useState } from 'react'
import { context } from './Usecontext'
const Usestate = () => {
    const[Count,setCount]=useState(0)
    const Increament=()=>{
        setCount(Count+1)
    }
    const Decreament=()=>{
        setCount(Count-1)
    }
    const Multiply =()=>{
        setCount(Count*Count)
    }
    const Clear =()=>{
        setCount(Count-Count)
    }
    const data=useContext(context) 
  return (
    <div>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
        <button onClick={Multiply}>Multiply</button>
        <button onClick={Clear}>Clear</button>
        <h3>{Count}</h3>
        <h2>{data}</h2>
        {/* <button onClick={data}>showdata</button> */}
    </div>
  )
}

export default Usestate;