import React from "react";
import { Routes, Route } from "react-router-dom";
import UsersListPage from "../pages/UsersListPage";
import UserDetailPage from "../pages/UserDetailPage";

export default function UsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UsersListPage />} />
      <Route path="detail/:id" element={<UserDetailPage />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
