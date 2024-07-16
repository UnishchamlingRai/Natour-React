import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
