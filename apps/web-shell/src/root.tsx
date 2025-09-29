import React, { lazy, Suspense } from "react";
import { Link, Routes, Route } from "react-router-dom";

const DashboardRemote = lazy(() => import("mfeDashboard/App"));

export default function Root() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: 12 }}>Home</Link>
        <Link to="/dashboard">Dashboard (remote)</Link>
      </nav>
      <div style={{ padding: 16 }}>
        <Routes>
          <Route path="/" element={<div>Hello Shell ðŸ‘‹</div>} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Cargando remotoâ€¦</div>}>
                <DashboardRemote />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
