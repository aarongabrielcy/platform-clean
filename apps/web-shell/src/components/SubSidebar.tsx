import React, { useEffect } from "react";
import { useUISlice } from "../state/ui.slice";
import { SUB_MENUS } from "../constants/nav";
import { Icon } from "./Icon";

export default function SubSidebar() {
  const { activeMenu, isSubSidebarOpen, closeSubSidebar } = useUISlice();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 1280 && isSubSidebarOpen) closeSubSidebar();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isSubSidebarOpen, closeSubSidebar]);

  const items = activeMenu ? SUB_MENUS[activeMenu] ?? [] : [];

  return (
    <>
      {/* Overlay SOLO si está abierto */}
      {isSubSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 xl:hidden"
          onClick={closeSubSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={[
          "fixed left-14 top-16 z-40",                            // debajo del header y junto a la sidebar
          "h-[calc(100vh-64px)] w-72 bg-white border-r border-gray-200",
          "transition-all duration-200 will-change-transform",
          isSubSidebarOpen
            ? "translate-x-0 opacity-100 visible pointer-events-auto"
            : "-translate-x-4 opacity-0 invisible pointer-events-none", // ⬅️ realmente oculto
        ].join(" ")}
        aria-hidden={!isSubSidebarOpen}
      >
        <div className="flex items-center justify-between px-4 h-12 border-b">
          <span className="font-medium capitalize text-gray-700">
            {activeMenu ?? "menú"}
          </span>
          <button
            onClick={closeSubSidebar}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Cerrar"
          >
            <Icon name="Close" className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-3">
          <ul className="space-y-1">
            {items.map((it) => (
              <li key={it.to}>
                <a
                  href={it.to}
                  className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeSubSidebar}
                >
                  {it.label}
                </a>
              </li>
            ))}
            {items.length === 0 && (
              <li className="px-3 py-2 text-sm text-gray-400">
                No hay sub-menús para este icono.
              </li>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}
