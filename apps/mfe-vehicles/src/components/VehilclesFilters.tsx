import React from "react";

export default function VehiclesFilters({ onChange }: { onChange: (v: string) => void }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Buscar por marca o año…"
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: 8, width: 280 }}
      />
    </div>
  );
}
