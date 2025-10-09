import { useEffect, useState } from "react";
import { getUser, type User } from "../services/users.repo";

export function useUserDetailVM(id: string) {
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState<User | null>(null);
  const [error, setError]   = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUser(id);
        if (alive) setRecord(data);
      } catch (e: any) {
        if (alive) setError(e?.message ?? "Error");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [id]);

  return { record, loading, error };
}
