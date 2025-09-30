import React from "react";
import { Routes, Route } from "react-router-dom";
import VehiclesListPage from "../pages/VehiclesListPage";
import VehicleDetailPage from "../pages/VehicleDetailPage";

export default function VehiclesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VehiclesListPage />} />
      <Route path="detail/:id" element={<VehicleDetailPage />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
