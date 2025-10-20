import React from "react";

export type Crumb = { label: string; to?: string; icon?: React.ReactNode };

type LinkLikeProps = { to: string; className?: string; children: React.ReactNode };
type LinkLike = React.ComponentType<LinkLikeProps>;

type BreadcrumbsProps = {
  items: Crumb[];
  /** si lo pasas, usamos tu Link de react-router; si no, <a> */
  LinkComponent?: LinkLike;
  className?: string;
};

const Arrow: React.FC<{ className?: string }> = ({ className }) => (
  // Right arrow (svgrepo #520912). Tamaño 14px, color gris suave.
  <svg
    className={className}
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414L13.172 12Z"
      fill="currentColor"
    />
  </svg>
);

export default function Breadcrumbs({
  items,
  LinkComponent,
  className,
}: BreadcrumbsProps) {
  if (!items?.length) return null;

  const LinkOrA: React.FC<{ to: string; className?: string; children: React.ReactNode }> =
    ({ to, className, children }) =>
      LinkComponent ? (
        <LinkComponent to={to} className={className}>
          {children}
        </LinkComponent>
      ) : (
        <a href={to} className={className}>
          {children}
        </a>
      );

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1 shadow-sm">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          const item = c.to ? (
            <LinkOrA
              to={c.to}
              className="text-slate-200 hover:text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded px-2 py-1"
            >
              <span className="inline-flex items-center gap-2">
                {c.icon ? <span className="text-slate-400">{c.icon}</span> : null}
                <span>{c.label}</span>
              </span>
            </LinkOrA>
          ) : (
            <span className="text-slate-700 rounded px-2 py-1 hover:text-blue-400">
              <span className="inline-flex items-center gap-2">
                {c.icon ? <span className="text-slate-400">{c.icon}</span> : null}
                <span>{c.label}</span>
              </span>
            </span>
          );

          return (
            <li key={`${c.label}-${i}`} className="inline-flex items-center">
              {i > 0 && <Arrow className="mx-1 text-slate-300" />}
              {item}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
