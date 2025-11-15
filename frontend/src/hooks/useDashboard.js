import { useQuery } from "@tanstack/react-query";
import { fetchBatch } from "../api/batch";

export default function useDashboard() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => fetchBatch(),
    staleTime: 10000, // data fresh for 10s
    cacheTime: 60000, // stays in cache 60s
    refetchOnWindowFocus: false,
  });
}
