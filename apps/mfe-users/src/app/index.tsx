import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../index.css";
import UsersRoutes from "./routes";

export default function UsersApp() {
  return (
    <div>
      <h2>Users (MFE)</h2>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="/users">Lista</Link>
        <Link to="/users/detail/100">Detalle #100</Link>
      </nav>
      <Routes>
        <Route path="/*" element={<UsersRoutes />} />
      </Routes>
    </div>
  );
}
