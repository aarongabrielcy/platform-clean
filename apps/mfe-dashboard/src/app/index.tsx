import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../index.css";
import RoutesInternal from "./routes";

export default function DashboardApp() {
  return (
    <div>
      <h2>Dashboard (MFE)</h2>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="/dashboard">Lista</Link>
        <Link to="/dashboard/detail/42">Detalle #42</Link>
      </nav>
      <Routes>
        <Route path="/*" element={<RoutesInternal />} />
      </Routes>
    </div>
  );
}