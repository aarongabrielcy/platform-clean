import React from "react";
import { cx } from "./utils/cx";

type CardProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  headerRight?: React.ReactNode;
};

export function Card({ title, subtitle, className, children, headerRight }: CardProps) {
  return (
    <section className={cx("card bg-white border border-transparent", className)}>
      {(title || subtitle || headerRight) && (
        <div className="mb-3 flex items-center justify-between gap-4">
          <div >
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtle">{subtitle}</p>}
          </div>
          {headerRight}
        </div>
      )}
      {children}
    </section>
  );
}
