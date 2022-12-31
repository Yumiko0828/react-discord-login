import { useEffect, useState } from "react";
import axios from "../services/axios";
import { User } from "../types/discord";

function Dash() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios
      .get("/user/me")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="dash">
      <span>ID: {user?.id}</span>
      <h1>
        User: {user?.username}#{user?.discriminator}
      </h1>

      <h2>Servidores:</h2>
      {user?.guilds.length === 0 ? (
        <h3>No estas en ningún servidor</h3>
      ) : (
        <ul>
          {user?.guilds
            .filter((guild) => (guild.permissions & 8) === 8)
            .map((guild) => (
              <li key={guild.id}>
                <h5>{guild.name}</h5>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Dash;
