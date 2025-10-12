import "../index.css";
import { Routes, Route, Link } from "react-router-dom";
import UsersRoutes from "./routes";

export default function UsersApp() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-slice-300 bg-white border border-slice-300">Users (MFE)</h2>
      <UsersRoutes />
    </div>
  );
 }
