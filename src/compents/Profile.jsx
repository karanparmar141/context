import React, { useContext } from 'react'
import { data } from './Context'
const Profile = () => {
    let {name}=useContext(data)
  return (
    <>
        <h1>username:{name}</h1>
    </>
  )
}

export default Profile