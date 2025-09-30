import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPage from "../pages/ListPage";
import DetailPage from "../pages/DetailPage";

export default function RoutesInternal() {
  return (
    <Routes>
      {/* cuando el usuario entra a /dashboard → lista */}
      <Route path="/" element={<ListPage />} />
      {/* cuando entra a /dashboard/detail/:id → detalle */}
      <Route path="detail/:id" element={<DetailPage />} />
      {/* catch-all dentro del dashboard */}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
