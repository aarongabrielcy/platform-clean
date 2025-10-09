// apps/mfe-users/src/viewmodels/useListVM.ts
import { useEffect, useState } from "react";
import { listUsers, type User } from "../services/users.repo";

export function useUsersListVM() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const rows = await listUsers();
        if (!cancelled) setData(rows);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { rows: data, loading, error };
}

