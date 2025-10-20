import React from "react";

type Props = {
  page: number;          // 1-based
  pageCount: number;
  total?: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ page, pageCount, total, onPageChange }: Props) {
  const prev = () => onPageChange(Math.max(1, page - 1));
  const next = () => onPageChange(Math.min(pageCount, page + 1));

  return (
    <div className="flex items-center justify-center gap-2 py-2 text-sm text-gray-700">
      <button
        onClick={prev}
        disabled={page <= 1}
        className="px-3 py-1.5 rounded border border-gray-300 bg-white disabled:opacity-50"
      >
        ← Anterior
      </button>

      <span className="px-2">
        Página <b>{page}</b> de <b>{pageCount}</b>
        {typeof total === "number" ? <span className="text-gray-500"> &nbsp;({total} registros)</span> : null}
      </span>

      <button
        onClick={next}
        disabled={page >= pageCount}
        className="px-3 py-1.5 rounded border border-gray-300 bg-white disabled:opacity-50"
      >
        Siguiente →
      </button>
    </div>
  );
}
