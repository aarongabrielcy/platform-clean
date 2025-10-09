// apps/mfe-users/src/pages/UserDetailPage.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button } from "@platform/ui-web";

export default function UserDetailPage() {
  const { id } = useParams();

  return (
    <div className="space-y-4">
      <Card title={`Detalle de usuario #${id}`} subtitle="(demo)">
        <div className="space-y-3 text-white/80">
          <div>Nombre: —</div>
          <div>Email: —</div>
          <div>Rol: —</div>
          <div>Estado: —</div>
        </div>
        <div className="mt-4">
          <Button variant="ghost" asChild>
            {/* si usas tu Button como wrapper de <a>, puedes cambiar Button para aceptar asChild*/}
            <Link to="/users">← Volver</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
