import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import HeaderBar from "./HeaderBar";
import SubSidebar from "../components/SubSidebar";
import { useUISlice } from "../state/ui.slice";
import DevHUD from "../components/DevHUD";

export default function AppLayout() {
  const { isSubSidebarOpen, closeSubSidebar } = useUISlice();

  // si arranca en viewport chico, que esté cerrado
  useEffect(() => {
    if (window.innerWidth < 1280 && isSubSidebarOpen) closeSubSidebar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen w-screen flex bg-gray-100 text-gray-700">
      <SideBar />
      <div className="flex-1 pl-14">
        <HeaderBar />
        <SubSidebar />
          {/* <DevHUD /><-- temporal */}
          <main className={`px-4 transition-[padding] duration-200 ${isSubSidebarOpen ? "xl:pl-72" : ""}`+""}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
