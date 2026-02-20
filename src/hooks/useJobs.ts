import { getListJobs } from "@/services/job.service";
import type { Job } from "@/types/job.types";
import { useEffect, useState } from "react";

export const usePositionJobs = () => {
  const [position, setPosition] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPositionsJobs = async () => {
      try {
        const data = await getListJobs();
        setPosition(data);
      } catch (err: any) {
        console.log(err);
        setError("Error al obtener la lista de empleos");
      } finally {
        setLoading(false);
      }
    };

    fetchPositionsJobs();
  }, []);

  return {
    position,
    loading,
    error,
  };
};
