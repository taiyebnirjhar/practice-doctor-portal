import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl pt-2.5">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
