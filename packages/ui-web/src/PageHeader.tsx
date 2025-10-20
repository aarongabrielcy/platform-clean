import React from "react";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

/** Header de página (mismo ancho/centrado que PageContainer) */
export default function PageHeader({
  breadcrumbs,
  title,
  actions
}: {
  breadcrumbs?: Crumb[];
  title?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="">
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        <div className="flex items-center gap-2">{actions}</div>
      </div>
    </div>
  );
}
