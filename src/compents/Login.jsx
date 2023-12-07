import React, { useContext, useState } from 'react'
import { data } from './Context'
const Login = () => {
    let[name,setName]=useState()
    let {UserName}=useContext(data)
  return (
    <>
    
        <input type="text"  onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>UserName(name)}>login</button>
    </>
  )
}

export default Login