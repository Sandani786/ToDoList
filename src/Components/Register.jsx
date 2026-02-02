import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';

function Register() {
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleFrom=(event)=>{
        event.preventDefault();
        const new_user={username,email,password}
        const addNewUser=async()=>{
           let getUser= await fetch(`https://todolist-q7jt.onrender.com/users?email=${new_user.email}`)
           let checkjson=await getUser.json();
           if(checkjson.length==0){
            let res=await fetch("https://todolist-q7jt.onrender.com/users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(new_user)
                
            })
            if(res.status==201){
                alert("successfully register")
                navigate("/login")
            }
           }else{
            alert("alredy exsit")
           }
        }
        addNewUser()
    }
  return (
    <form action="" onSubmit={handleFrom}>
        <label >UserName:</label>
        <input type="text" placeholder='enter the username'
        onChange={(event)=>{
            setUsername(event.target.value)
        }}
        />
        <label>Email:</label>
        <input type="email" placeholder='Enter the Email' 
        onChange={(event)=>{
            setEmail(event.target.value)
        }}/>
        <label>Password:</label>
       <input type="Password" placeholder='enter the password'
       onChange={(event)=>{
        setPassword(event.target.value)
       }}
       />
        <button type="submit">Resgister</button>
    </form>
  )
}

export default Register
