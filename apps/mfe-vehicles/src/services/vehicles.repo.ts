export type Vehicle = { id: string; plate: string; brand: string; model: string, year: string };

const MOCK: Vehicle[] = [
  { id: "121", plate: "YYR-2300", brand: "NISSAN", model: "March", year: "2006" },
  { id: "122", plate: "UCA-2023", brand: "VOLKSWAGEN",model: "Golf" ,year: "2021" },
  { id: "124", plate: "ESU-1221", brand: "FORD", model: "Mustang",year: "2010" }
];

export function listVehicles(query: string): Vehicle[] {
  if (!query) return MOCK;
  const q = query.toLowerCase();
  return MOCK.filter(u => u.plate.toLowerCase().includes(q) || u.brand.toLowerCase().includes(q));
}

export function getVehicle(id: string): Vehicle | null {
  return MOCK.find(u => u.id === id) ?? null;
}
