import React, { useEffect, useState } from 'react'
import Navbax from './Navbax'
import './App.css';


function Complete() {
    const[todos,setTodos]=useState([])
    let user=JSON.parse(localStorage.getItem("user_details"))
    useEffect(()=>{
        const getComplted=async()=>{
           try {
            //  let res=await fetch(`https://todolist-q7jt.onrender.com/Todo?is_completed=${true}&used_id=${user.id}`)
   const res = await fetch(
          `https://todolist-q7jt.onrender.com/Todo?is_completed=true&user_id=${user.id}`
        );
            let jres=await res.json()
            setTodos(jres)
           } catch (error) {
            console.log(error);
            
           }
                }
                getComplted();
            },[]
)
  return (
  <div>
      <div>
        <Navbax/>
    { todos.length==0?(<h1>No Complted task</h1>):(
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

export default Complete
