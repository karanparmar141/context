import React, { createContext, useState } from 'react'

export let data=createContext();

const Context = ({children}) => {
    let [name,setName]=useState('')
    const UserName=(val)=>{
        setName(val)
    }
  return (
    <>
    <data.Provider value={{name,UserName}}>
        {children}
    </data.Provider>
    </>
  )
}

export default Context