import type { Candidate } from "@/types/candidate.types";
import { PositionItem } from "./PositionItem";
import { usePositionJobs } from "@/hooks/useJobs";
import { Message } from "./ui/Message";

interface JobLProps {
  candidate: Candidate;
}

export const PositionList = ({ candidate }: JobLProps) => {
  const { position, loading, error } = usePositionJobs();

  return (
    <Message 
    loading={loading} 
    error={error} 
    loadingText="Cargando empleos...">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 p-2 md:p-8 lg:p-14">
        {position.map((position) => (
          <PositionItem
            key={position.id}
            position={position}
            candidate={candidate}
          />
        ))}
      </div>
    </Message>
  );
};
