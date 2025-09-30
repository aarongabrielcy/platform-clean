import React from "react";
import UsersFilters from "../components/UsersFilters";
import UsersTable from "../components/UsersTable";
import { useUsersListVM } from "../viewmodels/useUsersListVM";

export default function UsersListPage() {
  const { items, loading, setQuery } = useUsersListVM();

  return (
    <section>
      <h3 style={{ margin: "4px 0 12px" }}>Usuarios</h3>
      <UsersFilters onChange={setQuery} />
      {loading ? <div>Cargando…</div> : <UsersTable rows={items} />}
    </section>
  );
}
