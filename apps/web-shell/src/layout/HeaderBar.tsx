import React from "react";
import UserMenu from "../components/UserMenu";
import { Icon } from "../components/Icon";
export default function HeaderBar() {
  return (
    <header className="w-full bg-white h-16 border-b border-gray-200">
      <nav className="flex h-full items-center justify-between px-4">
        {/* Título / breadcrumb */}
        <div className="flex items-center gap-3">
          <h1 className="text-sm sm:text-base font-medium text-gray-700">
            Tailwind CSS Navbar
          </h1>
        </div>

        {/* Buscador 
        <div className="flex-1 px-4 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar…"
              className="w-full h-10 rounded-md border border-red-300 pl-10 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>*/}

        {/* Acción derecha (tu botón Home del snippet) */}
        <ul className="flex items-center gap-2">
          <li>
            <button type="button" className="relative inline-flex items-center px-2.5 py-1.5 text-sm font-medium text-center text-white rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <Icon name="Alert" className="h-5 w-5 text-gray-600" /> 
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">8</div>
            </button>
          </li>
          <li>
            <UserMenu
              onSettings={() => console.log("Settings")}
              onWishlist={() => console.log("Wishlist")}
              onLogout={() => console.log("Logout")}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
