import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import './App.css';

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
     const navigate=useNavigate()
    const handleForm=(event)=>{
        event.preventDefault();
              
        let getUser= async ()=>{
           try {
             let res=await fetch(`http://localhost:3001/users?email=${email}`)
            let jres=await res.json();
            if(jres.length==0){
                alert("invalid credintail")
            }
            else{
                if(jres[0].password==password){
                    localStorage.setItem("user_details",JSON.stringify(jres[0]))
                    navigate("/")
                    alert("Login succesful")
                }
                else{
                    alert("Invalid credintial")
                }
            }
           
           } catch (error) {
             console.log(error)
           }
        }
        getUser()
    }
    
  return (
   <form onSubmit={handleForm}>
    <label htmlFor="">UserName:</label>
    <input type="text" placeholder='Enter the username' 
        onChange={(event)=>{
            setEmail(event.target.value)
        }}
    />
    <label htmlFor="">Password:</label>
    <input type="Password" placeholder='enter the password'
        onChange={(event)=>{
            setPassword(event.target.value)
        }}
    />
    <button type="submit">Login</button>
    <Link to="/register">Create Account</Link>
   </form>
  )
}

export default Login
