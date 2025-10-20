import React from "react";
import { cx } from "./utils/cx";

export type Column<T> = {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
};

export type DataTableProps<T extends { id: React.Key }> = {
  columns: Column<T>[];
  rows: T[];
  className?: string;
  /** Activa sticky en el header */
  stickyHeader?: boolean;
  /** Clases extra para el <thead> (colores, etc.) */
  theadClassName?: string;
  onRowClick?: (row: T) => void;
  emptyContent?: React.ReactNode;
};

export function DataTable<T extends { id: React.Key }>({
  columns,
  rows,
  className,
  stickyHeader = true,
  theadClassName,
  onRowClick,
  emptyContent = <div className="p-4 text-blue-500">No data</div>,
}: DataTableProps<T>) {
  return (
    <div className={cx("overflow-x-auto border border-slate-100", className)}>
      {/* border-separate + spacing-0 evitan saltos y permiten sticky más fiable */}
      <table className="min-w-full table-fixed border-separate border-spacing-0 text-sm text-left">
        {/* Hacemos sticky también al THEAD, con fondo y z-index altos */}
        <thead className={cx(stickyHeader && "sticky top-0 z-20 bg-white", "text-zinc-600", theadClassName)}>
          <tr className="border-t border-b border-gray-300">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={cx(
                  "px-4 py-2 font-medium bg-white",   // fondo sólido, importante para cubrir filas
                  stickyHeader && "sticky top-0 z-20", // sticky por celda = más robusto cross-browser
                  col.className
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length}>{emptyContent}</td>
            </tr>
          )}

          {rows.map((row, i) => (
            <tr
              key={row.id as any}
              className={cx("bg-white hover:bg-slate-50", onRowClick && "cursor-pointer")}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => {
                const v = row[col.key];
                return (
                  <td key={String(col.key)} className={cx("px-4 py-2", col.className)}>
                    {col.render ? col.render(v, row, i) : String(v ?? "")}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
