import { config } from "dotenv";
config();

export default {
  clientId: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
  callback: "http://localhost:3000/auth/callback",
  scopes: ["identify", "guilds"],
};
