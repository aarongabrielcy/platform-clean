import { useEffect, useState } from "react";
import { getVehicle, type Vehicle } from "../services/vehicles.repo";

export function useVehicleDetailVM(id: string) {
  const [loading, setLoading] = useState(true);
  const [record, setRecord] = useState<Vehicle | null>(null);

  useEffect(() => {
    setLoading(true);
    const data = getVehicle(id);
    setRecord(data);
    setLoading(false);
  }, [id]);

  return { record, loading };
}
