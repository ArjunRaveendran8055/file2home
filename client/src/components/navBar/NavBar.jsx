import React, { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { Outlet } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-black py-3 text-white">
        <div className="w-full sm:px-2 lg:px-40  items-center justify-center">
          <div className="flex justify-between">
            <div className="flex justify-between  items-center  w-full">
              <div>
                <span className="font-bold">TaskManager</span>
              </div>
              <div className="hidden md:flex gap-12 items-center">
                <a href="#" className="py-5 px-3">
                  Home
                </a>
                <a href="#" className="py-5 px-3">
                  Tasks
                </a>
                <a href="#" className="py-5 px-3">
                  Catagories
                </a>
                <div className="logoutDiv flex justify-center items-center gap-2 bg-white text-black px-3 hover:scale-105 transition-all duration-100 py-1 rounded-lg cursor-pointer">
                  LogOut
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center text-4xl">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-menu-button"
              >
                <TbMenuDeep />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Services
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            About
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Contact
          </a>
          <div className="w-full flex  px-4 justify-end">
            <button className="px-3 py-1 bg-white text-black rounded-lg hover:scale-105 transition-all duration-100">
              Logout
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
