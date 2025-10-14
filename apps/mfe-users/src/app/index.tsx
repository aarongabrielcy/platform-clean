import "../index.css";
import { Routes, Route, Link } from "react-router-dom";
import UsersRoutes from "./routes";

export default function UsersApp() {
  return (
    <div className="space-y-4">
      <nav className="bg-grey-light p-3 rounded font-sans w-full m-4">
        <ol className="list-reset flex text-grey-dark">
          <li><a href="#" className="text-blue font-bold">Home</a></li>
          <li><span className="mx-2">/</span></li>
          <li><a href="#" className="text-blue font-bold">Users</a></li>
          <li><span className="mx-2">/</span></li>
          <li>List</li>
        </ol>
      </nav>
      <UsersRoutes />
    </div>
  );
 }
