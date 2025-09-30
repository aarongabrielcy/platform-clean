import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <aside style={{ width: 220, borderRight: "1px solid #eee", padding: 12 }}>
        <h3 style={{ marginTop: 0 }}>Shell</h3>
        <nav style={{ display: "grid", gap: 8 }}>
          <Link to="/dashboard">Dashboard (MFE)</Link>
          <Link to="/users">Users (MFE)</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}
