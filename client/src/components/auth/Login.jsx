import React from "react";
const Login = () => {
  return (
    <div className="w-full flex h-screen justify-center items-center p-2">
      <div className="signUpMain py-3 px-2 flex flex-col w-full lg:w-[25%] border-2 shadow-lg rounded-3xl gap-10">
        <div className="title flex w-full justify-center">
          <span className="text-4xl">User Login</span>
        </div>
        <div className="email flex flex-col gap-2 w-full font-bold pt-10">
          <div className="text flex w-full">EmailId</div>
          <div className="inputBox flex w-full bg-white">
            <input
              type="email"
              className="flex w-full h-10 rounded-lg border bg-white shadow-md outline-none px-2 font-semibold"
            />
          </div>
        </div>
        <div className="password flex flex-col gap-2 w-full font-bold pb-10">
          <div className="text flex w-full">Password</div>
          <div className="inputBox flex w-full">
            <input
              type="password"
              className="flex w-full h-10 rounded-lg border shadow-md outline-none px-2 font-semibold"
            />
          </div>
        </div>
        <div className="btnDiv w-full flex justify-center">
          <button className="bg-black px-2 py-1 text-2xl rounded-lg hover:bg-blue-900 shadow hover:shadow-xl text-white transition-all duration-150 hover:scale-105 font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
