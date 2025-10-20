import React from "react";
import { cx } from "./utils/cx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "soft" | "secondary";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

/*export function Button({ asChild, className, variant = "primary", size = "md", ...rest }: ButtonProps) {
  const base = "btn"; // tu clase base
  return <button {...rest} className={cx(base, className)} />;
}*/
export function Button({ asChild, className, variant = "primary", size = "md", ...rest }: ButtonProps) {
  const base = "btn"; // definida en @platform/styles/index.css
  const variantCls =
    variant === "primary"
      ? "btn-primary"
      : variant === "ghost"
      ? "btn-ghost"
      : variant === "secondary"
      ? "btn-secondary"
      : variant === "soft"
      ? "btn-soft"
      : "bg-white/10 text-white hover:bg-white/20"
      
  const sizeCls =
    size === "sm" ? "px-2 py-1 text-sm"
    : size === "lg" ? "px-4 py-3 text-base"
    : "px-3 py-2 text-sm";
  return <button {...rest} className={cx(base, variantCls, sizeCls, className)} />;
}
