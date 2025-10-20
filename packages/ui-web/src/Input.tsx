import React from "react";
import { cx } from "./utils/cx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
  leftIcon?: React.ReactNode;        //nuevo
};

export function Input({
  label,
  hint,
  error,
  wrapperClassName,
  className,
  leftIcon,
  ...rest
}: InputProps) {
  return (
    <label className={cx("block space-y-1", wrapperClassName)}>
      {label && <span className="text-sm text-slate-600">{label}</span>}

      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          {...rest}
          className={cx(
            "w-full h-9 bg-transparent text-slate-700 placeholder-slate-400",
            "border-b border-slate-300 focus:border-blue-500 focus:outline-none",
            "pr-2",
            leftIcon ? "pl-8" : "pl-3",
            className
          )}
        />
      </div>

      {hint && !error && <span className="text-xs text-slate-500">{hint}</span>}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </label>
  );
}
