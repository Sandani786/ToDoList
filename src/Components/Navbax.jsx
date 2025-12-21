import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css';

function Navbax() {
  const navigate=useNavigate()
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/completed" >Completed Task</Link>
      <Link to="/pending" >Pending task</Link>
      <button onClick={()=>{
        localStorage.removeItem("user_details")
         navigate("/login")
      }}>Logout
     
      </button>
    </nav>
  )
}

export default Navbax
