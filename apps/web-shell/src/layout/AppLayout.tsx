import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Icon } from "../components/Icon";

export default function AppLayout() {
  const location = useLocation();

  // Menú de navegación (podría venir de un JSON o endpoint)
  const menu = [
    { to: "/dashboard", icon: "Dashboard", label: "Entidades" },
    { to: "/users", icon: "Users", label: "Usuarios" },
    { to: "/vehicles", icon: "Vehicles", label: "Vehículos" },
  ];

  return (
    <div className="h-screen w-screen flex bg-gray-100 text-gray-700">
      {/* Sidebar */}
      <aside className="flex flex-col items-center bg-white shadow h-full w-14">
        {/* Logo */}
        <div className="h-16 flex items-center w-full border-b border-gray-200">
          <Link className="h-6 w-6 mx-auto" to="/">
            <Icon name="Logo" className="h-6 w-6 mx-auto text-orange-500" />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex-1">
          {menu.map((item) => {
            const isActive = location.pathname.startsWith(item.to);
            return (
              <li key={item.to} className="hover:bg-gray-100">
                <Link
                  to={item.to}
                  className={`h-16 px-6 flex justify-center items-center w-full transition-colors duration-150 ${
                    isActive ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  <Icon
                    name={item.icon as any}
                    className={`h-5 w-5 ${
                      isActive ? "text-orange-500" : "text-gray-700"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Logout */}
        <div className="mt-auto h-16 flex items-center w-full">
          <button
            className="h-16 w-10 mx-auto flex justify-center items-center hover:bg-red-100 focus:outline-none"
            onClick={() => console.log("Logout clicked")}
          >
            <Icon name="LogOut" className="h-5 w-5 text-red-700" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
