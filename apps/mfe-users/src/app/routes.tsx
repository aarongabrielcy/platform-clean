import { Routes, Route } from "react-router-dom";
import UsersListPage from "../pages/UsersListPage";
import UserDetailPage from "../pages/UserDetailPage";

export default function UsersRoutes() {
  return (
    <Routes>
      <Route index element={<UsersListPage />} />
      <Route path="detail/:id" element={<UserDetailPage />} />
      <Route path="*" element={<div className="text-white/70 p-4">Not found</div>} />
    </Routes>
  );
}
