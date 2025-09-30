import React from "react";

export default function UsersFilters({ onChange }: { onChange: (v: string) => void }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Buscar por nombre o email…"
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: 8, width: 280 }}
      />
    </div>
  );
}
