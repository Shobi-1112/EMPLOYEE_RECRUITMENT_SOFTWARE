import React, { useState } from 'react'
import {encrypt} from "n-krypta"
function PasswordEncry() {
    const [password,setPassword]=useState();
    const seckey='key'
    const change=()=>{
        const newpass=encrypt(password,seckey)
        console.log(newpass)
    }
  return (
    <div>
      <input type='password' onChange={(data)=>setPassword(data.target.value)}/>
      <button onClick={change}>encrypt</button>
    </div>
  )
}

export default PasswordEncry
