import React from "react";
import { useUISlice } from "../state/ui.slice";

export default function DevHUD() {
  const s = useUISlice();
  return (
    <div className="fixed bottom-2 left-20 z-[9999] bg-black/70 text-white text-xs rounded px-2 py-1">
      <div>activeMenu: <b>{String(s.activeMenu)}</b></div>
      <div>isSubSidebarOpen: <b>{String(s.isSubSidebarOpen)}</b></div>
      <div className="flex gap-1 mt-1">
        <button className="px-1 bg-white/20 rounded" onClick={() => s.openSubSidebar("dashboard" as any)}>open: dashboard</button>
        <button className="px-1 bg-white/20 rounded" onClick={() => s.openSubSidebar("users" as any)}>open: users</button>
        <button className="px-1 bg-white/20 rounded" onClick={() => s.openSubSidebar("vehicles" as any)}>open: vehicles</button>
        <button className="px-1 bg-white/20 rounded" onClick={s.closeSubSidebar}>close</button>
      </div>
    </div>
  );
}
