import React from "react";

export default function Table({ rows }: { rows: Array<{ id: string; name: string }> }) {
  return (
    <table style={{ borderCollapse: "collapse", width: 420 }}>
      <thead>
        <tr>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>ID</th>
          <th style={{ borderBottom: "1px solid #ddd", textAlign: "left", padding: 8 }}>Nombre</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(r => (
          <tr key={r.id}>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.id}</td>
            <td style={{ borderBottom: "1px solid #f0f0f0", padding: 8 }}>{r.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
