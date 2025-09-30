import React from "react";
import VehiclesFilters from "../components/VehilclesFilters";
import VehiclesTable from "../components/VehiclesTable";
import { useVehiclesListVM } from "../viewmodels/useVehiclesListVM";

export default function VehiclesListPage() {
  const { items, loading, setQuery } = useVehiclesListVM();

  return (
    <section>
      <h3 style={{ margin: "4px 0 12px" }}>Vehiculos</h3>
      <VehiclesFilters onChange={setQuery} />
      {loading ? <div>Cargando…</div> : <VehiclesTable rows={items} />}
    </section>
  );
}
