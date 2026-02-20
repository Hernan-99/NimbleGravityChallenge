import { api } from "@/api/api.axios";
import type { Job } from "@/types/job.types";

export const getListJobs = async (): Promise<Job[]> => {
  const { data } = await api.get<Job[]>(`/jobs/get-list`);
  return data;
};
