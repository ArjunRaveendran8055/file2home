import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import Sidenav from "../components/features/sideBar/SideNav";
import Configurator from "../components/features/configurator/Configurator";
import { setOpenConfigurator } from "../components/features/configurator/configuratorSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../widgets/layout/DashboardNavbar";
import Footer from "../widgets/layout/footer";
import { routes } from "../routes";
import { setToastView } from "../components/features/toast/toastSlice";
import { setUser } from "../components/features/user/userSlice";
import { removeLoader, setLoader } from "../components/features/Loader/loaderSlice";
import Logo from "./logo.png";

export function Dashboard() {
  const { user } = useSelector((state) => state.user);
  let flag = false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav brandName="FILE2HOME"  />

      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => dispatch(setOpenConfigurator())}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <div className="text-blue-gray-600 relative">
          {
            //<=.......put your Outlet Component down here.......=>
          }
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
