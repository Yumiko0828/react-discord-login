import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import useVerify from "../hooks/useVerify";

function Home() {
  const navigate = useNavigate();
  const verify = useVerify();

  if (window.opener) {
    window.opener.postMessage("dash");
    window.close();
  }

  const handleDashBtn = () => {
    navigate("/dash");
  };

  return (
    <>
      <h1>React Discord Login</h1>
      {!verify ? (
        <LoginButton />
      ) : (
        <button onClick={handleDashBtn}>Go to Dash!</button>
      )}
    </>
  );
}

export default Home;
