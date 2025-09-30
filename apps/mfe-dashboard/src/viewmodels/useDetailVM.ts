import { useEffect, useState } from "react";
import { getItem } from "../services/dashboard.repo";

export function useDetailVM(id: string) {
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState<{ id: string; name: string } | null>(null);

  useEffect(() => {
    setLoading(true);
    const data = getItem(id);
    setRecord(data);
    setLoading(false);
  }, [id]);

  return { record, loading };
}
