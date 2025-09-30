import { useEffect, useState } from "react";
import { getUser, type User } from "../services/users.repo";

export function useUserDetailVM(id: string) {
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState<User | null>(null);

  useEffect(() => {
    setLoading(true);
    const data = getUser(id);
    setRecord(data);
    setLoading(false);
  }, [id]);

  return { record, loading };
}
