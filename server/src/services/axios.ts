import axios from "axios";

const instance = axios.create({
  baseURL: "https://discord.com/api/oauth2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
