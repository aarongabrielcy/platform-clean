import React from "react";
import { useParams, Link } from "react-router-dom";
import { useVehicleDetailVM } from "../viewmodels/useVehicleDetailVM";

export default function VehicleDetailPage() {
  const { id = "" } = useParams();
  const { record, loading } = useVehicleDetailVM(id);

  if (loading) return <div>Cargando detalle…</div>;
  if (!record) return <div>No encontrado</div>;

  return (
    <article>
      <h3>Vehiculo #{record.id}</h3>
      <p><strong>{record.brand}</strong> — {record.model}</p>
      <p>Año: <code>{record.year}</code></p>
      <Link to="/vehicles">← Volver</Link>
    </article>
  );
}
