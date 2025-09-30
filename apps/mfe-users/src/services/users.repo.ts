export type User = { id: string; name: string; email: string; role: "admin" | "operator" | "viewer" };

const MOCK: User[] = [
  { id: "100", name: "Ada Lovelace", email: "ada@example.com", role: "admin" },
  { id: "101", name: "Grace Hopper", email: "grace@example.com", role: "operator" },
  { id: "102", name: "Linus Torvalds", email: "linus@example.com", role: "viewer" }
];

export function listUsers(query: string): User[] {
  if (!query) return MOCK;
  const q = query.toLowerCase();
  return MOCK.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
}

export function getUser(id: string): User | null {
  return MOCK.find(u => u.id === id) ?? null;
}
