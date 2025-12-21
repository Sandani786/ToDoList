import { Route, Routes } from "react-router-dom"
import Addtodo from "./Components/Addtodo"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Home from "./Components/Home"
import Complete from "./Components/Complete"
import Pending from "./Components/Pending"
import ProtectedRoute from "./Components/ProtectedRoute"


function App() {
  return (
    <>
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/completed" element={<ProtectedRoute><Complete/></ProtectedRoute>}/>
      <Route path="/pending" element={<ProtectedRoute><Pending/></ProtectedRoute>}/>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
     </Routes>
    </>
  )
}

export default App
