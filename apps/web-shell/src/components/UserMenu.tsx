import React, { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Props = {
  onSettings?: () => void;
  onWishlist?: () => void;
  onLogout?: () => void;
};

const UserMenu: React.FC<Props> = ({ onSettings, onWishlist, onLogout }) => {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Cerrar al hacer click fuera o al presionar Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      const t = e.target as Node;
      if (menuRef.current?.contains(t)) return;
      if (btnRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const handleSettings = () => {
    onSettings?.();
    setOpen(false);
  };
  const handleWishlist = () => {
    onWishlist?.();
    setOpen(false);
  };
  const handleLogout = () => {
    onLogout?.();
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={btnRef}
        type="button"
        className="inline-flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="user-menu"
        onClick={() => setOpen(v => !v)}
        title="Cuenta"
      >
        {/* Tus SVG locales vía <Icon /> */}
        <Icon name="Avatar" className="h-8 w-8 text-gray-400" />
        <Icon name="Dots" className="h-5 w-5 text-gray-400" />
      </button>

      {/* Dropdown */}
      <div
        ref={menuRef}
        id="user-menu"
        role="menu"
        aria-hidden={!open}
        className={[
          "absolute right-0 mt-2 w-56 rounded-md border border-gray-200 bg-white shadow-lg z-50",
          "transition transform origin-top-right",
          open ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible pointer-events-none",
        ].join(" ")}
      >
        <ul className="py-1 text-sm text-gray-700">
          <li role="menuitem">
            <button
              onClick={handleSettings}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
            >
              <Icon name="UserData" className="h-5 w-5 text-gray-600" />
              <span className="text-gray-400">Miguel Castillo</span>
            </button>
          </li>

          <li role="menuitem">
            <button
              onClick={handleWishlist}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
            >
              <Icon name="Preferences" className="h-5 w-5 text-gray-600" />
              <span>Preferences</span>
            </button>
          </li>

          <li role="menuitem" className="border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
            >
              <Icon name="LogOut" className="h-5 w-5 text-gray-700" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
