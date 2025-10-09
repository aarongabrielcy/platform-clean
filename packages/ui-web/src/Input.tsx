import React from "react";
import { cx } from "./utils/cx";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  wrapperClassName?: string;
};

export function Input({
  label,
  hint,
  error,
  wrapperClassName,
  className,
  ...rest
}: InputProps) {
  return (
    <label className={cx("block space-y-1", wrapperClassName)}>
      {label && <span className="text-sm text-white/80">{label}</span>}
      <input
        {...rest}
        className={cx(
          "w-full rounded-md bg-white/5 text-white placeholder-white/50",
          "border border-white/10 focus:border-brand-500 focus:ring-0",
          "px-3 py-2 outline-none",
          className
        )}
      />
      {hint && !error && <span className="text-xs text-white/50">{hint}</span>}
      {error && <span className="text-xs text-red-300">{error}</span>}
    </label>
  );
}
