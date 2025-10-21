// packages/ui-web/src/TableFrame.tsx
import React from "react";

type Props = {
  title?: React.ReactNode;
  actions?: React.ReactNode;

  /** Modo legacy: una sola tabla */
  table?: React.ReactNode;

  /** Modo header separado (recomendado para header fijo) */
  tableHeader?: React.ReactNode;  // <table> con sólo el thead
  tableBody?: React.ReactNode;    // <table> con sólo el tbody

  pagination?: React.ReactNode;
  bodyMaxHeightClassName?: string; // e.g. "max-h-[calc(100vh-260px)]"
};

export default function TableFrame({
  title,
  actions,
  table,
  tableHeader,
  tableBody,
  pagination,
  bodyMaxHeightClassName = "max-h-[calc(100vh-260px)]",
}: Props) {
  const splitMode = !!tableHeader || !!tableBody;

  return (
    <div className="bg-white border border-slate-200 rounded-md shadow-sm flex flex-col pt-2">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py3 pb-3 border-b border-slate-200">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">{actions}</div>
      </div>

      {/* Header fijo (fuera del scroll) */}
      {splitMode && (
        <div className="overflow-hidden">{tableHeader}</div>
      )}

      {/* Área scrolleable */}
      <div className={`relative ${splitMode ? "overflow-y-auto" : "overflow-y-auto"} ${bodyMaxHeightClassName}`}>
        {splitMode ? tableBody : table}
      </div>

      {/* Paginación */}
      {pagination ? <div className="border-t border-gray-200">{pagination}</div> : null}
    </div>
  );
}
