import React, { useState } from 'react'
import './App.css';

function Addtodo() {
    const[todo,setTodo]=useState("")
    const btn=()=>{
        let user_data=localStorage.getItem("user_details")
        let date=new Date()
          let addTodo=async()=>{
            try {
                let res=await fetch("https://todolist-q7jt.onrender.com/Todo",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                // body:JSON.stringify({todo,create_Time:date.toLocaleTimeString(),is_complted:false,user_id:JSON.parse(user_data).id})
                body: JSON.stringify({
  todo,
  create_Time: date.toLocaleTimeString(),
  is_completed: false,
  user_id: JSON.parse(user_data).id
})
            })
             if(res.ok){
            alert("add")
        }
            } catch (error) {
                
            }
        }
        addTodo()
    
}
    // btn()
  return (
<div>
    <input type="text" placeholder='enther the the todo data' 
    onChange={(event)=>{
        setTodo(event.target.value)
    }}
    />
    <button onClick={btn}>Add</button>
</div>
  )
}

export default Addtodo;
