import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddUser = ({setLoggedIn}) => {
  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const navigate = useNavigate()
  const signUp = async () => {
    
    let result = await fetch('http://localhost:5000/register',{
        method:'POST',
        body: JSON.stringify({name,email,password}),
        headers:{
          'Content-Type':'application/json'
        }
    })
    result = await result.json();
    console.log(result)
    setName('')
    setEmail('')
    setPassword('')
    if(result){
      navigate('/');
    }
    localStorage.setItem("user",JSON.stringify(result))
    setLoggedIn(true)
  }
  return (
    <div>
          <div className="bg-secondary p-8 rounded-lg w-fit mx-auto flex flex-col gap-10 mt-20">
              <h1 className="text-light">Create new Account</h1>
              <div className="col">
                  <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" aria-label="First name" />
              </div>
              <div className="col">
          <input type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" aria-label="Last name" />
              </div>
              <div className="col">
          <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" aria-label="Last name" />
              </div>
              <button type="submit" onClick={signUp} className="bg-white w-min self-center p-3 py-1 rounded-md  hover:bg-secondary hover:scale-110 transition-all">Submit</button>
          </div>
    </div>
  )
}

export default AddUser
