// packages/ui-web/src/global.d.ts
declare module "react/jsx-runtime";

// Opcional (temporal): si te faltan muchas definiciones de JSX, puedes añadir:
declare namespace JSX {
  interface IntrinsicElements {
    // Acepta cualquier atributo en elementos HTML (evita muchos errores durante la migración).
    [elemName: string]: any;
  }
}
