import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDetailVM } from "../viewmodels/useDetailVM";

export default function DetailPage() {
  const { id = "" } = useParams();
  const { record, loading } = useDetailVM(id);

  if (loading) return <div>Cargando detalle…</div>;
  if (!record) return <div>No encontrado</div>;

  return (
    <article>
      <h3>Detalle #{record.id}</h3>
      <p>Nombre: <strong>{record.name}</strong></p>
      <pre style={{ background: "#f6f8fa", padding: 12, borderRadius: 6 }}>
        {JSON.stringify(record, null, 2)}
      </pre>
      <Link to="/dashboard">← Volver a la lista</Link>
    </article>
  );
}
