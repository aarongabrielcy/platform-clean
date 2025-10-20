// packages/ui-web/src/DataTableSplit.tsx
import React from "react";
import { cx } from "./utils/cx";

export type Column<T> = {
  key: keyof T;
  header: string;
  className?: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
};

export type DataTableSplitProps<T extends { id: React.Key }> = {
  columns: Column<T>[];
  rows: T[];
  className?: string;
  onRowClick?: (row: T) => void;
  emptyContent?: React.ReactNode;
  /** Render-prop: te doy {header, body} para que los coloques */
  children: (parts: { header: React.ReactNode; body: React.ReactNode }) => React.ReactNode;
};

export function DataTableSplit<T extends { id: React.Key }>({
  columns,
  rows,
  className,
  onRowClick,
  emptyContent = <div className="p-4 text-blue-500">No data</div>,
  children,
}: DataTableSplitProps<T>) {
  const headerTableRef = React.useRef<HTMLTableElement | null>(null);
  const bodyTableRef = React.useRef<HTMLTableElement | null>(null);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [colWidths, setColWidths] = React.useState<number[]>([]);

  // Calcula anchos mirando la primera fila del body (o la del header si no hay filas)
  const measure = React.useCallback(() => {
    const bodyRow =
      bodyTableRef.current?.querySelector("tbody tr") ??
      undefined;

    const cells = (bodyRow?.children ?? headerTableRef.current?.querySelectorAll("thead th")) as
      | HTMLCollectionOf<Element>
      | NodeListOf<Element>
      | undefined;

    if (!cells || !cells.length) return;

    const widths = Array.from(cells).map((el) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      return Math.ceil(rect.width);
    });

    setColWidths(widths);
  }, []);

  // Mide al montar y cuando cambien filas/columnas
  React.useLayoutEffect(() => {
    measure();
  }, [rows, columns, measure]);

  // Observa resize del contenedor scrolleable
  React.useEffect(() => {
    if (!scrollRef.current) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(scrollRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const ColGroup = ({ widths }: { widths: number[] }) => (
    <colgroup>
      {columns.map((_, i) => (
        <col key={i} style={widths[i] ? { width: `${widths[i]}px` } : undefined} />
      ))}
    </colgroup>
  );

  const header = (
    <div className={cx("border-b border-slate-200", className)}>
      <table ref={headerTableRef} className="min-w-full table-fixed border-separate border-spacing-0 text-sm text-left">
        {colWidths.length > 0 && <ColGroup widths={colWidths} />}
        <thead className="text-zinc-600 bg-white">
          <tr className="border-t border-b border-gray-300">
            {columns.map((col) => (
              <th key={String(col.key)} className={cx("px-4 py-2 font-medium bg-white", col.className)}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );

  const body = (
    <div ref={scrollRef} className="min-h-0"> 
      <table ref={bodyTableRef} className="min-w-full table-fixed border-separate border-spacing-0 text-sm text-left">
        {colWidths.length > 0 && <ColGroup widths={colWidths} />}
        <tbody className="divide-y divide-slate-100">
          {rows.length === 0 && (
            <tr>
              <td className="px-4 py-2" colSpan={columns.length}>
                {emptyContent}
              </td>
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

  return <>{children({ header, body })}</>;
}
