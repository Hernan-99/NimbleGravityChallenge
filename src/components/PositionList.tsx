import type { Candidate } from "@/types/candidate.types";
import { PositionItem } from "./PositionItem";
import { usePositionJobs } from "@/hooks/useJobs";

interface JobLProps {
  candidate: Candidate;
}

export const PositionList = ({ candidate }: JobLProps) => {
  const { position, loading } = usePositionJobs();

  if (loading) return <p>Cargando empleos...</p>;

  return (
    <div>
      {position.map((position) => (
        <PositionItem
          key={position.id}
          position={position}
          candidate={candidate}
        />
      ))}
    </div>
  );
};
