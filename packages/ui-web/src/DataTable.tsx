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
  stickyHeader?: boolean;
  onRowClick?: (row: T) => void;
  emptyContent?: React.ReactNode;
};

export function DataTable<T extends { id: React.Key }>({
  columns,
  rows,
  className,
  stickyHeader = true,
  onRowClick,
  emptyContent = <div className="p-4 text-white/60">No data</div>
}: DataTableProps<T>) {
  return (
    <div className={cx("overflow-x-auto rounded-xl border border-white/10", className)}>
      <table className="min-w-full text-sm text-left">
        <thead className={cx("bg-white/10 text-white", stickyHeader && "sticky top-0 z-10")}>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={cx("px-4 py-2 font-medium", col.className)}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length}>{emptyContent}</td>
            </tr>
          )}

          {rows.map((row, i) => (
            <tr
              key={row.id as any}
              className={cx("hover:bg-white/5", onRowClick && "cursor-pointer")}
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
