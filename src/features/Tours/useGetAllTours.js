import { useQuery } from "@tanstack/react-query";

import { getAllTours } from "../../services/Tours";

export function useGetAllTours() {
  const {
    isLoading,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: getAllTours,
  });

  return { isLoading, error, tours };
}
