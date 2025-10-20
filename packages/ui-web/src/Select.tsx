import React from "react";
import { cx } from "./utils/cx";

export type SelectOption = { value: string; label: string };

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
  leftIcon?: React.ReactNode;
  options: SelectOption[];
  placeholder?: string; // muestra una opción vacía al inicio
};

export default function Select({
  label,
  hint,
  error,
  wrapperClassName,
  className,
  leftIcon,
  options,
  placeholder,
  ...rest
}: SelectProps) {
  return (
    <label className={cx("block space-y-1", wrapperClassName)}>
      {label && <span className="text-sm text-slate-600">{label}</span>}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </span>
        )}

        {/* chevron */}
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.997l3.71-3.77a.75.75 0 111.08 1.04l-4.24 4.31a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"/>
          </svg>
        </span>

        <select
          {...rest}
          className={cx(
            "w-full h-9 bg-transparent text-slate-700",
            "border-b border-slate-300 focus:border-blue-500 focus:outline-none",
            "appearance-none pr-8",
            leftIcon ? "pl-8" : "pl-3",
            "text-sm",
            className
          )}
        >
          {placeholder !== undefined && (
            <option value="">{placeholder}</option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {hint && !error && <span className="text-xs text-slate-500">{hint}</span>}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}
