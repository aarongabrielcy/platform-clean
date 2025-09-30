import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Protected from "../layout/Protected";

// MFEs remotos (cargados vía Module Federation)
const DashboardRemote = lazy(() => import("mfeDashboard/app/index"));
const UsersRemote = lazy(() => import("mfeUsers/app/index"));
const VehiclesRemote = lazy(() => import("mfeVehicles/app/index"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Redirección inicial al dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />
        {/* Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <Protected>
              <Suspense fallback={<div>Cargando dashboard…</div>}>
                <DashboardRemote />
              </Suspense>
            </Protected>
          }
        />
        {/* Users */}
        <Route
          path="/users/*"
          element={
            <Protected>
              <Suspense fallback={<div>Cargando usuarios…</div>}>
                <UsersRemote />
              </Suspense>
            </Protected>
          }
        />
        {/* Vehicles */}
        <Route
          path="/vehicles/*"
          element={
            <Protected>
              <Suspense fallback={<div>Cargando vehiculos…</div>}>
                <VehiclesRemote />
              </Suspense>
            </Protected>
          }
        />
        {/* 404 */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Route>
    </Routes>
  );
}
