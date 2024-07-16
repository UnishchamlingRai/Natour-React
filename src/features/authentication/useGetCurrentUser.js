import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authentication";
export function useGetCurrentUser() {
  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(),
  });

  return { isLoading, error, user };
}
