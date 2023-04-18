import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Features/UserSlice'

const Login = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")   
  
    const dispatch=useDispatch();

    const subb=(e)=>{
        e.preventDefault()
        console.log(name)
        console.log(email)

        dispatch(login({
            name:name,
            email:email,
            loggedIn:true
        }))

    }

  return (
    <div>Login
        <form onSubmit={subb}>

        <input type="text" name='name' placeholder='FirstName' value={name} onChange={(e)=>setName(e.target.value)}  />
        <br/>
        <input type="email" name='email' placeholder='emailID' value={email} onChange={(e)=>setEmail(e.target.value)}   />
        <br/>
        <button>Submit</button>

        </form>
       
    </div>

  )
}

export default Login