// apps/mfe-users/src/pages/UserDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "@platform/ui-web";
import { useUserDetailVM } from "../viewmodels/useUserDetailVM";

export default function UserDetailPage() {
  const { id  = ""} = useParams();
  const { record, loading } = useUserDetailVM(id);

  if (loading) return <div>Cargando detalle…</div>;
  if (!record) return <div>No encontrado</div>;
return (
    <div className="space-y-4">
      <Card title={`Detalle de usuario #${id}`} subtitle="(demo)">
        <div className="space-y-3 text-zinc-500">
          <div>Name: { record.name? record.name : `-` }</div>
          <div>Email: { record.email? record.email : `-` }</div>
          <div>Role: { record.role? record.role : `-` }</div>
          <div>state: { record.status? record.status : `-` }</div>
        </div>
        <div className="mt-4">
            <Link to="/users">← Volver</Link>
        </div>
      </Card>
    </div>
  );
}
