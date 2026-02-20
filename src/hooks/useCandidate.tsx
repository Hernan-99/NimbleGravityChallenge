import { useEffect, useState } from "react";
import type { Candidate } from "@/types/candidate.types";
import { getCandidateByEmail } from "@/services/candidate.service";

export const useCandidate = (email: string) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const data = await getCandidateByEmail(email);
        setCandidate(data);
      } catch (err: any) {
        console.log(err);
        setError("Error al obtener los datos del candidato");
      } finally {
        setLoading(false);
      }
    };
    fetchCandidate();
  }, [email]);

  return {
    candidate,
    loading,
    error,
  };
};
