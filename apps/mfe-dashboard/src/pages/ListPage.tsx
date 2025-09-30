import React from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";
import { useListVM } from "../viewmodels/useListVM";

export default function ListPage() {
  const { items, loading, applyFilter } = useListVM();

  return (
    <section>
      <h3 style={{ margin: "4px 0 12px" }}>Listado</h3>
      <Filters onChange={applyFilter} />
      {loading ? <div>Cargando…</div> : <Table rows={items} />}
    </section>
  );
}
