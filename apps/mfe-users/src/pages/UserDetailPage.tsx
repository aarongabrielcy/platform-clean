// apps/mfe-users/src/pages/UserDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, PageContainer } from "@platform/ui-web";
import { useUserDetailVM } from "../viewmodels/useUserDetailVM";
import { PageHeader } from "@platform/ui-web";

export default function UserDetailPage() {
  const { id = "" } = useParams();
  const { record, loading } = useUserDetailVM(id);

  if (loading) return <PageContainer className="pt-4">Cargando detalle…</PageContainer>;
  if (!record) return <PageContainer className="pt-4">No encontrado</PageContainer>;

  return (
    <PageContainer className="">
      <PageHeader
              breadcrumbs={[
                { label: "Home", to: "/" },
                { label: "Users", to: "/users" },
                { label: "List" },
              ]}
              title=""
              actions={/*<Button className="h-9" onClick={() => alert("Nuevo")}>Nuevo</Button>*/ null}
            />
      <Card title={`Detalle de usuario #${id}`} subtitle="(demo)">
        <div className="space-y-3 text-zinc-600">
          <div>Nombre: {record.name || "-"}</div>
          <div>Email: {record.email || "-"}</div>
          <div>Rol: {record.role || "-"}</div>
          <div>Estado: {record.status || "-"}</div>
        </div>
        <div className="mt-4">
          <Link to="/users" className="text-indigo-600 hover:underline">← Volver</Link>
        </div>
      </Card>
    </PageContainer>
  );
}