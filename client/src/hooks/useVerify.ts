import { useEffect, useState } from "react";
import axios from "../services/axios";

function useVerify() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios
      .get("/auth/verify")
      .then((res) => {
        setAuth(res.data.authenticated);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return auth;
}

export default useVerify;
