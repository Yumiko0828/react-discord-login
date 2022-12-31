function LoginButton() {
  const handleMessage = (e: MessageEvent) => {
    if (e.data === "dash") {
      window.location.href = "/dash";
    }
  };

  const handleLogin = () => {
    window.open(
      "http://localhost:3000/auth",
      "Discord Login",
      "height=700, width=500"
    );
    window.addEventListener("message", handleMessage, false);
  };

  return <button onClick={handleLogin}>Login with Discord</button>;
}

export default LoginButton;
