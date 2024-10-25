import { Routes, Route } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import axios from "axios";
import Home from "../pages/dashboard/Home";
import { SERVER_URL } from "../server";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";

function App() {
  axios.defaults.baseURL = SERVER_URL;
  axios.defaults.withCredentials = true;
  return (
    <div className="">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />

        <Route path="" element={<Dashboard />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
