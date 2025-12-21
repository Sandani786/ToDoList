import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './App.css';

// const Navigate=useNavigate()
function ProtectedRoute({children}) {
    let user=JSON.parse(localStorage.getItem("user_details"))
 if(user==null){
    return <Navigate to="/login" />
 }else{
    return children
 }
}
// function ProtectedRoute({ children }) {
//   let user = JSON.parse(localStorage.getItem("user_details"));
// 
//   if (user == null) {
//     return <Navigate to="/login" />;
//   }
// 
//   return children;
// }


export default ProtectedRoute
