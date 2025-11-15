import { useQuery } from "@tanstack/react-query";
import { fetchBatch } from "../api/batch";

export default function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchBatch,
  });
}
