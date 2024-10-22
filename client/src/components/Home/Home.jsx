import React from "react";
const Home = () => {
  return (
    <div className="homeMain sm:px-3 lg:px-40">
      <div className="w-full flex flex-col sm:gap-2 lg:gap-5 pt-10 ">
        <span className="text-3xl font-light">Hi, Arjun</span>
        <div className="eventDiv w-full text-2xl  border-red-400 rounded p-1 border py-10">
          <div className="">Event</div>
          <div className="sm:pt-2 lg:pt-5">There is no Task for this day</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
