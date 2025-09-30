export function listItems(filter: string) {
  const base = [
    { id: "1", name: "Vehicle A" },
    { id: "2", name: "Vehicle B" },
    { id: "42", name: "Answer" }
  ];
  if (!filter) return base;
  return base.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()));
}

export function getItem(id: string) {
  const all = listItems("");
  return all.find(x => x.id === id) ?? null;
}
