import React from "react";

export default function Filters({ onChange }: { onChange: (v: string) => void }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Filtrar por nombre…"
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: 8, width: 280 }}
      />
    </div>
  );
}
