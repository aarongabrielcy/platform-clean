export type MenuKey = "dashboard" | "users" | "vehicles";

// Menú principal (sidebar de iconos)
export const MAIN_MENU: Array<{ key: MenuKey; to: string; icon: "Dashboard" | "Users" | "Vehicles"; label: string; }> = [
  { key: "dashboard", to: "/dashboard", icon: "Dashboard", label: "Entidades" },
  { key: "users",     to: "/users",     icon: "Users",     label: "Usuarios" },
  { key: "vehicles",  to: "/vehicles",  icon: "Vehicles",  label: "Vehículos" },
];

// Submenús por cada key (sub-sidebar blanca)
export const SUB_MENUS: Record<MenuKey, Array<{ label: string; to: string }>> = {
  dashboard: [
    { label: "Vista general",    to: "/dashboard" },
    { label: "Retail Insights",  to: "/dashboard/retail-insights" },
    { label: "Shop Tracker",     to: "/dashboard/shop-tracker" },
  ],
  users: [
    { label: "Listado",          to: "/users" },
    { label: "Roles y permisos", to: "/users/roles" },
  ],
  vehicles: [
    { label: "Flota",            to: "/vehicles" },
    { label: "Mantenimiento",    to: "/vehicles/maintenance" },
  ],
};
