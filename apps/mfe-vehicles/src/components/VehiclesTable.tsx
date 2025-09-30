import React from "react";
import type { Vehicle } from "../services/vehicles.repo";
import { Link } from "react-router-dom";

export default function VehiclesTable({ rows }: { rows: Vehicle[] }) {
  return (
    <table style={{ borderCollapse: "collapse", width: 540 }}>
      <thead>
        <tr>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>ID</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Marca</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>modelo</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Año</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id}>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.id}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.brand}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.model}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.year}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>
              <Link to={`/vehicles/detail/${r.id}`}>Ver</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
