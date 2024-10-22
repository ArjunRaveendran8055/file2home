import { Route, Routes } from "react-router-dom";
import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";
import Navbar from "../components/navBar/NavBar";
import Home from "../components/Home/Home";
import { server } from "../server";
import axios from "axios"
export default function App() {
  axios.defaults.baseURL=`${server}`
  
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="" element={<Navbar />}>
        <Route path="/"element={<Home/>}/>
        <Route />
        </Route>
      </Routes>
    </div>
  );
}
