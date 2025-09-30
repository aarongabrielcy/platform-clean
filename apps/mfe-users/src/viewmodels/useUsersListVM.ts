import { useEffect, useState } from "react";
import { listUsers, type User } from "../services/users.repo";
import { useUsersUISlice } from "../state/ui.slice";

export function useUsersListVM() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<User[]>([]);
  const { query, setQuery } = useUsersUISlice();

  useEffect(() => {
    setLoading(true);
    const data = listUsers(query);
    setItems(data);
    setLoading(false);
  }, [query]);

  return { items, loading, setQuery };
}
