import React, { useEffect, useState } from 'react'
import Navbax from './Navbax';
import './App.css';

function Pending() {
    const[todos,setTodo]=useState([])
        let user=JSON.parse(localStorage.getItem("user_details"))

    useEffect(()=>{
        const getPending=async()=>{
             let res=await fetch(`https://todolist-q7jt.onrender.com/Todo?is_completed=${false}&user_id=${user.id}`)
            let jres=await res.json();
            setTodo(jres)
        }
        getPending()
    },[])
  return (
    <div>
        <div>
            <Navbax/>
    { todos.length==0?(<h1>No pending task</h1>):(
        todos.map((item)=>(
            <div key={item.id}>
                <h1>{item.todo}</h1>
                </div>
        ))
    )}
    </div>
    </div>
  )
}

export default Pending
