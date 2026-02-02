import React, { useEffect, useState } from 'react'
import Addtodo from './Addtodo';
import Navbax from './Navbax';
import { useNavigate } from 'react-router-dom';
import './App.css';


function Home() {
    let loginUser=JSON.parse(localStorage.getItem("user_details"))
    const[todo,setTodo]=useState([])
   
    useEffect(()=>{
        const getTodo=async()=>{
        try {
            let res=await fetch(`https://todolist-q7jt.onrender.com/Todo?user_id=${loginUser.id}`)
            let jres=await res.json();
            setTodo(jres)
        } catch (error) {
            console.log(error);
            
        }
        }
        getTodo()
    },[todo])
     // UPDATE (toggle complete)
    const toggleComplete = async (id) => {
        try {
            let response = await fetch(`https://todolist-q7jt.onrender.com/Todo/${id}`);
            let item = await response.json();

                        item.is_completed = !item.is_completed;


            await fetch(`https://todolist-q7jt.onrender.com/Todo/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(item)
            });

            // loadTodos(); // refresh UI
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div>
        <Navbax/>
    <Addtodo/>
    {
        todo.length==0?(<h1>No data found</h1>):(
            todo.map(item=>(
                <div key={item.id}>
                    <h1 style={{textDecoration:item.is_completed?"line-through":"none"}}>{item.todo}</h1>
                    <button onClick={async()=>{
                        let res=fetch(`https://todolist-q7jt.onrender.com/Todo/${item.id}`,{
                            method:"DELETE"
                        })
                       
                    }}>
                         Del</button>
                         <button onClick={() => toggleComplete(item.id)}>
                            {item.is_completed ? "Completed" : "Mark As Complete"}
                        </button>
                </div>
            ))
        )
    }
    </div>
  )
}

export default Home
