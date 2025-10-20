import React from "react";
import { cx } from "./utils/cx";

type Props = {
  children: React.ReactNode;
  /** offset izquierdo para no tapar la sidebar del shell (w-14 = 56px) */
  leftOffset?: number; // default 56
  className?: string;
};

export default function FooterBar({ children, leftOffset = 56, className }: Props) {
  return (
    <div
      className={cx(
        "fixed bottom-0 right-0 z-40 bg-white border-t border-slate-200",
        "shadow-[0_-1px_8px_rgba(0,0,0,.05)]",
        className
      )}
      style={{ left: leftOffset }}
    >
      <div className="px-3 py-2">{children}</div>
    </div>
  );
}
