// apps/mfe-users/src/pages/UsersListPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, DataTable, type Column } from "@platform/ui-web";
import { useUsersListVM } from "../viewmodels/useUsersListVM";
import type { User } from "../services/users.repo";

const columns: Column<User>[] = [
  { 
    key: "id",
    header: "ID",
    className: "w-24" 
  },
  { 
    key: "name", 
    header: "Nombre" 
  },
  { 
    key: "email",
    header: "Email",
    render: (v: any) => 
      <span className="text-zinc-500">
        {v ? v: "-"}
      </span>,
  },
  {
    key: "role",
    header: "Rol",
    render: (v: any) => 
      <span className="px-2 py-1 rounded bg-blue-300/10 text-zinc-500">
        {v ?? "viewer"}
      </span>,
  },
  {
    key: "status",
    header: "Estado",
    render: (v: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
              | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
              | Iterable<React.ReactNode> | null | undefined> | null | undefined) => (
      <span
      //agrega el más grosor a las letras y estandarizar tamaño de boton
        className= {
          "px-2 py-1 rounded text-xs font-bold " + 
          (v === "active" ? "bg-green-600/30 text-green-800/100" : "bg-red-600/30 text-red-600/100")
        }
      >
        {v}
      </span>
    ),
  },
];

export default function UsersListPage() {
  const { rows, loading, error } = useUsersListVM();
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <Card
        title="Usuarios"
        subtitle="Listado"
        headerRight={<Button onClick={() => alert("Crear usuario")}>Nuevo</Button>}
      >
        {loading && <div className="p-4 text-white/70">Cargando…</div>}
        {error && <div className="p-4 text-red-300">Error: {error}</div>}
        {!loading && !error && (
          <DataTable<User>
            columns={columns}
            rows={rows}
            onRowClick={(row: { id: any; }) => navigate(`/users/detail/${row.id}`)}
          />
        )}
      </Card>
    </div>
  );
}
