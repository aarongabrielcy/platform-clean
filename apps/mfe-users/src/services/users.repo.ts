// apps/mfe-users/src/services/users.repo.ts
export type User = {
  id: number | string;
  name: string;
  email: string;
  role?: string;
  status?: "active" | "blocked";
};

const USE_LOCAL = import.meta.env.VITE_USE_LOCAL_DATA === "true";
const API_URL = import.meta.env.VITE_USERS_API_URL ?? "";

// importa el JSON como módulo (Vite lo parsea)
import localUsersJson from "../assets/users.json"; // <- archivo movido a src

function mapUser(u: any, idx: number): User {
  return {
    id: u.id ?? idx + 1,
    name: u.name ?? u.fullName ?? "N/A",
    email: u.email ?? "no-email@demo.local",
    role: u.role ?? u.roleName ?? "viewer",
    status: (u.status as User["status"]) ?? "active",
  };
}

export async function listUsers(): Promise<User[]> {
  
  const useLocal = USE_LOCAL || !API_URL;
  
  if (useLocal) {
     console.log("[mfe-users] usando JSON local embebido");
    const rows: any[] = Array.isArray((localUsersJson as any).data)
      ? (localUsersJson as any).data
      : (localUsersJson as any);
      return rows.map(mapUser);
  }
  console.log("[mfe-users] GET remoto:", API_URL);
  // remoto real
  const res = await fetch(API_URL, { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  const rows: any[] = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
  return rows.map(mapUser);
}

// si necesitas detalle:
export async function getUser(id: string | number): Promise<User | null> {
  const all = await listUsers();
  const found = all.find(u => String(u.id) === String(id));
  return found ?? null;
}
