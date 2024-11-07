import axios from "axios";
import React, { useState } from "react";
import f2hIcon from "../../assets/f2hIcon.png";
import { Button } from "@mui/material";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    //console.log("key is",key)
    const value = e.target.value;
    setUser({
      ...user,
      [key]: value,
    });
    setError({
      ...error,
      [key]: "",
    });
  };
  ///console.log("errors are",error)
  //console.log("user is", user);
  const checkErrors = () => {
    const errors = {};
    let formIsValid = true;

    //email validation
    if (!user.email) {
      errors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email is invalid";
      formIsValid = false;
    }
    if (user.password.length < 4) {
      errors.password = "Password min length is 4";
      formIsValid = false;
    }
    if (!user.password) {
      errors.password = "Password is required!";
      formIsValid = false;
    }
    setError(errors);
    return formIsValid;
  };

  const submitHandler = () => {
    //check if any errors exists
    //console.log("submitted Again");
    let formIsValid = checkErrors();
    if (!formIsValid) {
      return;
    }
    axios
      .post(`/auth/login`, {
        user,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="w-full flex h-screen justify-center items-center p-2">
      <div className="loginMain relative py-3 px-5 flex flex-col sm:w-full md:max-w-[500px] sm:h-[510px] lg:h-[650px] border-2 shadow-2xl rounded-3xl sm:gap-5 lg:gap-10">
        <div className="title flex w-full justify-center">
          <div className="relative p-2 ">
            <div className="absolute sm:bottom-1 lg:bottom-2 left-0 w-full flex justify-center font-extrabold font-Poppins text-gray-700">
              <span className="text-xl">File2Home</span>
            </div>
            <img
              className="sm:w-20 sm:h-20 lg:w-28 lg:h-28 rounded-full border p-2"
              src={f2hIcon}
              alt=""
            />
          </div>
        </div>
        <div className="title flex w-full justify-center">
          <span className="sm:text-2xl lg:text-4xl font-Poppins">
            User Login
          </span>
        </div>
        <div className="email flex flex-col gap-2 w-full font-bold">
          <div className="text flex w-full">EmailId</div>
          <div className="inputBox flex w-full">
            <input
              // value={userData.email}
              name="email"
              type="email"
              className="flex w-full h-12 rounded-lg border shadow-md focus:shadow-2xl bg-white outline-none px-2 font-semibold"
              onChange={handleChange}
            />
          </div>
          {error.email && (
            <span className="text-red-500 font-extralight">{error.email}</span>
          )}
        </div>
        <div className="password flex flex-col gap-2 w-full font-bold">
          <div className="text flex w-full">Password</div>
          <div className="inputBox flex w-full">
            <input
              // value={userData.email}
              name="password"
              type="password"
              className="flex w-full h-12 rounded-lg border shadow-md bg-white focus:shadow-2xl outline-none px-2 font-semibold"
              onChange={handleChange}
            />
          </div>
          {error.password && (
            <span className="text-red-500 font-extralight">
              {error.password}
            </span>
          )}
        </div>
        <div className="absolute left-0 sm:bottom-5 lg:bottom-10 btnDiv w-full flex justify-center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black", // Set the background color to black
              color: "white", // Set the text color to white for better contrast
              "&:hover": {
                backgroundColor: "black", // Optional: change color on hover to dark gray
              },
            }}
            onClick={submitHandler}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
