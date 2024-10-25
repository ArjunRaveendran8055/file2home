import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
    cnPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};
    //username exists
    if (!userData.userName) {
      errors.userName = "User name is required";
      formIsValid = false;
    }

    //lenght of username
    if (userData.userName.length < 6) {
      errors.userName = "uName must be atleast 6 characters";
      formIsValid = false;
    }

    //email validation
    if (!userData.email) {
      errors.email = "Email is required";
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = "Email is invalid";
      formIsValid = false;
    }

    //is password exists
    if (!userData.password) {
      errors.password = "Password is required";
      formIsValid = false;
    }

    if (userData.password.length < 4) {
      errors.password = "Password min length is 4";
      formIsValid = false;
    }

    if (userData.password !== userData.cnPassword) {
      errors.cnPassword = "unmatching passwords";
      formIsValid = false;
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    axios
      .post("/auth/signUp", { userData })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.error.split(", ")[0]);
      });
  };

  // console.log(userData)

  return (
    <div className="w-full flex h-screen justify-center items-center p-2">
      <div className="signUpMain py-3 px-2 flex flex-col sm:w-full md:max-w-[500px] border-2 shadow-2xl rounded-3xl gap-10">
        <div className="title flex w-full justify-center">
          <span className="text-4xl">SignUp</span>
        </div>
        <div className="userName flex flex-col gap-2 w-full font-bold">
          <div className="text flex w-full">UserName</div>
          <div className="inputBox flex w-full  ">
            <input
              type="text"
              name="userName"
              // value={userData.userName}
              className="flex w-full h-12 rounded-lg border bg-white shadow-md outline-none px-2 font-semibold"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
          <span className="text-red-500 font-extralight">{errors.userName}</span>
        </div>
        <div className="email flex flex-col gap-2 w-full font-bold">
          <div className="text flex w-full">EmailId</div>
          <div className="inputBox flex w-full">
            <input
              // value={userData.email}
              name="email"
              type="email"
              className="flex w-full h-12 rounded-lg border shadow-md bg-white outline-none px-2 font-semibold"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
          <span className="text-red-500 font-extralight">{errors.email}</span>

        </div>
        <div className="password flex flex-col gap-2 w-full font-bold">
          <div className="text flex w-full">Password</div>
          <div className="inputBox flex w-full">
            <input
              // value={userData.password}
              name="password"
              type="password"
              className="flex w-full h-12 rounded-lg border bg-white shadow-md outline-none px-2 font-semibold"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
          <span className="text-red-500 font-extralight">{errors.password}</span>
        </div>
        <div className="conPassword flex flex-col gap-2 w-full font-bold">
          <div className="text flex w-full">Confirm Password</div>
          <div className="inputBox flex w-full">
            <input
              // value={userData.cnPassword}
              name="cnPassword"
              type="password"
              className="flex w-full h-12 rounded-lg border bg-white shadow-md outline-none px-2 font-semibold"
              onChange={(e) => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </div>
          <span className="text-red-500 font-extralight">{errors.cnPassword}</span>
        </div>
        <div className="btnDiv w-full flex justify-center">
          <button
            className="bg-black px-2 py-1 text-2xl rounded-lg hover:bg-blue-900 shadow hover:shadow-xl text-white transition-all duration-150 hover:scale-105 font-bold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
