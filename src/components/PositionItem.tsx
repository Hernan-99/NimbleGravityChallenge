import { applyJob } from "@/services/candidate.service";
import type { Candidate } from "@/types/candidate.types";
import type { Job } from "@/types/job.types";
import { useState } from "react";

interface PositionIProps {
  position: Job;
  candidate: Candidate;
}

export const PositionItem = ({ position, candidate }: PositionIProps) => {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      await applyJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        jobId: position.id,
        repoUrl,
      });

      setSuccess(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Error al aplicar al empleo",
      );
    }
  };
  return (
    <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}>
      <h3>{position.title}</h3>

      <input
        type="text"
        placeholder="Ingresar url del repositorio"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button onClick={handleSubmit} disabled={loading || !repoUrl}>
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {success && <p style={{ color: "green" }}>Aplicacion exitosa!</p>}

      {error && <p style={{ color: "green" }}>{error}</p>}
    </div>
  );
};
