import { useState } from "react";
import useLogin from "./useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("admin@natours.io");
  const [password, setPassword] = useState("test1234");
  const { login, isLoading } = useLogin();

  function onSubmitHandler(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
    console.log("Email and Password:", email, password);
  }
  return (
    <form id="form" className="form" onSubmit={onSubmitHandler}>
      <div className="form__group">
        <label className="form__label" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          className="form__input"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form__group ma-bt-md">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="form__input"
          type="password"
          placeholder="••••••••"
          required
          minLength="8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form__group">
        <button className="btn btn--green">
          {isLoading ? "Loging...." : "Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
