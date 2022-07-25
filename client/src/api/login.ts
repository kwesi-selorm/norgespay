import axios from "axios";

interface LoginProps {
  username: string;
  password: string;
}

export const api = axios.create({
  baseURL: "/api/login",
});

export async function submitLoginDetails({ username, password }: LoginProps) {
  const data = { username, password },
    config = { headers: { "Content-Type": "application/json" } };

  const response = await api.post("/", data, config);
  return response;
}
