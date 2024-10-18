import React from "react";
import { FaRegUser } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      <div className="homeMain w-full flex sm:flex-col lg:flex-row  gap-2 sm:px-2 lg:px-40 sm:py-5 lg:py-20">
        <div className="basicDetails sm:w-full lg:w-[50%] p-2 border-2 border-black rounded-lg  flex flex-col sm:gap-2 lg:gap-5 items-center justify-center">
          <div className="title w-full flex justify-center text-4xl">Basic Details</div>
          <div className="iconDiv">
            <FaRegUser size={100} />
          </div>
          <div className="details flex items-center flex-col">
            <div>Arjun AR</div>
            <div>arjunraveendran012@gmail.com</div>
          </div>
        </div>

        <div className="completeDetails lg:w-[50%] p-2 border-2 border-black rounded-lg  flex flex-col sm:gap-2 lg:gap-5  items-center ">
          <div className="taskManagerDetails w-full">
            <div className="flex flex-col text-xl">
              <div className="w-full p2-3 text-3xl font-bold border-b-2 border-black ">
                Task Details
              </div>
              <div className="flex flex-row">
                <div className="w-60">Total Tasks</div>
                <div>21</div>
              </div>
              <div className="flex flex-row">
                <div className="w-60">Competed</div>
                <div>21</div>
              </div>
              <div className="flex flex-row">
                <div className="w-60">In Progress</div>
                <div>21</div>
              </div>
              <div className="flex flex-row">
                <div className="w-60">Pending</div>
                <div>21</div>
              </div>
            </div>
          </div>

          <div className="catagoryDetails sm:w-full ">
            <div className="flex flex-col text-xl">
              <div className="w-full p2-3 text-3xl font-bold border-b-2 border-black">
                Catagory Details
              </div>
              <div className="flex flex-row">
                <div className="w-60">Total Catagories</div>
                <div>5</div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
