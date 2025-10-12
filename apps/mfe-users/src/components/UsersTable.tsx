import React from "react";
import type { User } from "../services/users.repo";
import { Link } from "react-router-dom";

export default function UsersTable({ rows }: { rows: User[] }) {
  return (
    <table >
      <thead>
        <tr>
          <th >ID</th>
          <th >Name</th>
          <th >Email</th>
          <th >Rol</th>
          <th >Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id}>
            <td >{r.id}</td>
            <td >{r.name}</td>
            <td >{r.email}</td>
            <td >{r.role}</td>
            <td >
              <Link to={`/users/detail/${r.id}`}>Ver</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
