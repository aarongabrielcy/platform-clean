import { useEffect, useState } from "react";
import { listItems } from "../services/dashboard.repo";
import { useUISlice } from "../state/ui.slice";

export function useListVM() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Array<{ id: string; name: string }>>([]);
  const { filter, setFilter } = useUISlice();

  useEffect(() => {
    setLoading(true);
    const data = listItems(filter);
    setItems(data);
    setLoading(false);
  }, [filter]);

  return {
    items,
    loading,
    applyFilter: setFilter
  };
}
