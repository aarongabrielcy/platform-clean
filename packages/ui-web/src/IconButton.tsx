import React from "react";
import { cx } from "./utils/cx"; // ya existe en ui-web

type Size = "sm" | "md" | "lg";
type Tone =
  | "primary"
  | "neutral"
  | "success"
  | "danger"
  | "warning"
  | "indigo"
  | "slate";

export type IconButtonProps = {
  /** Icono como React component (p.ej. IconGrid de @platform/assets) */
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Tamaño visual del botón */
  size?: Size;
  /** Paleta base para bg/hover */
  tone?: Tone;
  /** Contador (badge) opcional, p.ej. notificaciones */
  badgeCount?: number;
  /** Deshabilitar interacción */
  disabled?: boolean;
  /** Posicionamiento flotante (por ejemplo para botón flotante inferior) */
  className?: string;
  /** Envolver en <button> nativo, pasando handlers/attrs */
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  title?: string;
};

/** Tabla mínima de mapeo tone -> clases Tailwind */
const toneBg: Record<Tone, string> = {
  primary: "bg-blue-400 hover:bg-blue-700 text-white",
  neutral: "bg-slate-600 hover:bg-slate-700 text-white",
  success: "bg-green-600 hover:bg-green-700 text-white",
  danger:  "bg-red-600 hover:bg-red-700 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  indigo:  "bg-indigo-600 hover:bg-indigo-700 text-white",
  slate:   "bg-slate-500 hover:bg-slate-600 text-white",
};

const sizeMap: Record<Size, string> = {
  sm: "h-10 w-10 text-[18px]",
  md: "h-12 w-12 text-[20px]",
  lg: "h-14 w-14 text-[22px]",
};

export default function IconButton({
  icon: Icon,
  size = "md",
  tone = "indigo",
  badgeCount,
  disabled,
  className,
  onClick,
  title,
}: IconButtonProps) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={cx(
        "relative inline-flex items-center justify-center rounded-full shadow-md focus:outline-none",
        "transition-colors select-none",
        sizeMap[size],
        toneBg[tone],
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      <Icon className="h-[1em] w-[1em] [&_*]:fill-current [&_*]:stroke-current" aria-hidden />

      {typeof badgeCount === "number" && badgeCount > 0 && (
        <span
          className={cx(
            "absolute -top-1 -right-1 min-w-[1.25rem] h-5",
            "px-1 rounded-full text-[10px] font-bold",
            "bg-red-500 text-white border-2 border-white"
          )}
        >
          {badgeCount > 99 ? "99+" : badgeCount}
        </span>
      )}
    </button>
  );
}
