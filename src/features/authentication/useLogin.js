import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authentication";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import Cookies from "js-cookie";
export default function useLogin() {
  const { onSetUser } = useUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("User:", user);
      console.log("User:", user.data.user);
      Cookies.set("jwt", `${user.token}`, {
        expires: 365,
        path: "/",
        sameSite: "Lax",
      });
      onSetUser(user.data.user);
      queryClient.invalidateQueries(["userlogin", user]);
      navigate("/");
    },
    onError: (err) => {
      console.log("ERRRor in UseLogin:", err);
    },
  });

  return { login, isLoading };
}
