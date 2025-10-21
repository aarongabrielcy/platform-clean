import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumbs, PageContainer, PageHeader, TableFrame, Pagination, FooterBar,
  DataTableSplit, Input, Button, type Column
} from "@platform/ui-web";
import UsersFilters, { UsersFilterValue } from "../components/UsersFilters";
import { useUsersListVM } from "../viewmodels/useUsersListVM";
import type { User } from "../services/users.repo";

const columns: Column<User>[] = [
  { key: "id", header: "ID", className: "w-20" },
  { key: "name", header: "Nombre" },
  { key: "email", header: "Email",
    render: (v) => <span className="text-zinc-500">{v || "-"}</span> },
  { key: "role", header: "Rol",
    render: (v) => <span className="px-2 py-1 rounded bg-blue-300/10 text-zinc-600">{v ?? "viewer"}</span> },
  { key: "status", header: "Estado",
    render: (v) => (
      <span className={
        "px-2 py-1 rounded text-xs font-bold " +
        (v === "active" ? "bg-green-600/30 text-green-800" : "bg-red-600/30 text-red-600")
      }>
        {String(v)}
      </span>
    )
  },
];

export default function UsersListPage() {
  const navigate = useNavigate();
  const { rows = [], loading, error } = useUsersListVM(); // JSON local
  // Estado de filtros (client-side)
  const [filters, setFilters] = React.useState<UsersFilterValue>({});
  const [page, setPage] = React.useState(1);
  const pageSize = 25;

  const filtered = React.useMemo(() => {
    const { id, name, email, role, status } = filters;
    return rows.filter(r => {
      if (id && !String(r.id).includes(id)) return false;
      if (name && !(r.name ?? "").toLowerCase().includes(name.toLowerCase())) return false;
      if (email && !(r.email ?? "").toLowerCase().includes(email.toLowerCase())) return false;
      if (role && r.role !== role) return false;
      if (status && r.status !== status) return false;
      return true;
    });
  }, [rows, filters]);

  const total = filtered.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);

  const clearFilters = () => { setFilters({}); setPage(1); };
  const breadcrumbs = [
    { label: "Home", to: "/" },
    { label: "Users", to: "/users" },
    { label: "List" },
  ];
  if (loading) return <PageContainer className="pt-4">Cargando…</PageContainer>;
  if (error)   return <PageContainer className="pt-4 text-red-600">Error: {error}</PageContainer>;

  return (
    <PageContainer className="pb-14">
     {/*<PageHeader
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Users", to: "/users" },
          { label: "List" },
        ]}
        title=""
        actions={<Button className="h-9" onClick={() => alert("Nuevo")}>Nuevo</Button> null}
      />*/}
      {/* Tabla con header fijo */}
      <DataTableSplit<User> columns={columns} rows={paged}
        onRowClick={(row) => navigate(`/users/detail/${row.id}`)}
      >
        {({ header, body }) => (
          <TableFrame
          title={<Breadcrumbs items={breadcrumbs} className="-ml-2" />}
          actions={
           <UsersFilters
              value={filters}
              onChange={(v) => { setFilters(v); setPage(1); }}
              onClear={clearFilters}
            />
          }
            tableHeader={header}
            tableBody={body}
            bodyMaxHeightClassName="max-h-[calc(100vh-250px)]"
            pagination={
              /*<Pagination 
                page={page}
                pageCount={pageCount}
                total={total}
                onPageChange={setPage}
              />*/ null
            }
          />
        ) }
      </DataTableSplit>
      <FooterBar>
       <Pagination
         page={page}
         pageCount={pageCount}
         total={total}
         onPageChange={setPage}
       />
     </FooterBar>
    </PageContainer>
  );
}
