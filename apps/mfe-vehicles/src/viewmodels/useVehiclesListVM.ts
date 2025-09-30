import { useEffect, useState } from "react";
import { listVehicles, type Vehicle } from "../services/vehicles.repo";
import { usVehiclesUISlice } from "../state/ui.slice";

export function useVehiclesListVM() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Vehicle[]>([]);
  const { query, setQuery } = usVehiclesUISlice();

  useEffect(() => {
    setLoading(true);
    const data = listVehicles(query);
    setItems(data);
    setLoading(false);
  }, [query]);

  return { items, loading, setQuery };
}
