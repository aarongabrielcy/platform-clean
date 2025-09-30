import React from "react";
import { useParams, Link } from "react-router-dom";
import { useUserDetailVM } from "../viewmodels/useUserDetailVM";

export default function UserDetailPage() {
  const { id = "" } = useParams();
  const { record, loading } = useUserDetailVM(id);

  if (loading) return <div>Cargando detalle…</div>;
  if (!record) return <div>No encontrado</div>;

  return (
    <article>
      <h3>Usuario #{record.id}</h3>
      <p><strong>{record.name}</strong> — {record.email}</p>
      <p>Rol: <code>{record.role}</code></p>
      <Link to="/users">← Volver</Link>
    </article>
  );
}
