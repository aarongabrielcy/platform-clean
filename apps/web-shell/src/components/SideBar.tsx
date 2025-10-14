import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "./Icon";
import { useUISlice } from "../state/ui.slice";
import { MAIN_MENU } from "../constants/nav";

export default function SideBar() {
  const location = useLocation();
  const openSubSidebar = useUISlice((s) => s.openSubSidebar);

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-white text-gray-700 flex flex-col items-center shadow z-50">
      {/* Logo */}
      <div className="h-16 w-full grid place-content-center border-b border-gray-200">
        <Link to="/dashboard" title="Inicio">
          <Icon name="Logo" className="h-6 w-6 text-orange-500" />
        </Link>
      </div>

      {/* Íconos */}
      <nav className="flex-1 w-full py-2 flex flex-col items-center gap-2">
        {MAIN_MENU.map((m) => {
          const active = location.pathname.startsWith(m.to);
          return (
            <button
              key={m.key}
              onClick={() => openSubSidebar(m.key)}
              className={`w-10 h-10 grid place-content-center rounded hover:bg-gray-100 ${
                active ? "text-orange-500" : "text-gray-700"
              }`}
              title={m.label}
            >
              <Icon name={m.icon} className="h-5 w-5" />
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="h-16 w-full grid place-content-center border-t border-gray-200">
        <button onClick={() => console.log("Logout")} title="Salir">
          <Icon name="Settings" className="h-5 w-5 text-red-600" />
        </button>
      </div>
    </aside>
  );
}
