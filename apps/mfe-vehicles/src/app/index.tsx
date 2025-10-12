import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../index.css";
import VehiclesRoutes from "./routes";

export default function VehiclesApp() {
  return (
    <div>
      <h2 className="bg-blue-300">Vehicles (MFE)</h2>
      <nav style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <Link to="/vehicles">Lista</Link>
        <Link to="/vehicles/detail/121">Detalle #121</Link>
      </nav>
      <Routes>
        <Route path="/*" element={<VehiclesRoutes />} />
      </Routes>
    </div>
  );
}
