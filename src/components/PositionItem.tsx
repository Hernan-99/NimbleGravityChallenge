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
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
      <h3 className="text-lg font-semibold">{position.title}</h3>

      <input
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Ingresar url del repositorio"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button
        className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading || !repoUrl}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {success && <p className="text-green-600 text-sm">Aplicacion exitosa!</p>}

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};
