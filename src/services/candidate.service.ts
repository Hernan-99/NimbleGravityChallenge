import { api } from "@/api/api.axios";
import type { Candidate } from "@/types/candidate.types";

export const getCandidateByEmail = async (
  email: string,
): Promise<Candidate> => {
  const { data } = await api.get<Candidate>(`/candidate/get-by-email`, {
    params: { email },
  });
  return data;
};

export const applyJob = async (payload: {
  uuid: string;
  candidateId: string;
  applicationId: string;
  jobId: string;
  repoUrl: string;
}) => {
  const { data } = await api.post<{ ok: boolean }>(
    `/candidate/apply-to-job`,
    payload,
  );
  return data;
};
