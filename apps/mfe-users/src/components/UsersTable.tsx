import React from "react";
import type { User } from "../services/users.repo";
import { Link } from "react-router-dom";

export default function UsersTable({ rows }: { rows: User[] }) {
  return (
    <table style={{ borderCollapse: "collapse", width: 540 }}>
      <thead>
        <tr>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>ID</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Nombre</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Email</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Rol</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id}>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.id}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.name}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.email}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.role}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>
              <Link to={`/users/detail/${r.id}`}>Ver</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
