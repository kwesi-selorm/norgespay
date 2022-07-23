import axios from "axios";

interface SignUpProps {
  email: string;
  username: string;
  password: string;
}

export const api = axios.create({
  baseURL: "/api/signup",
});

export async function submitSignupDetails({
  email,
  username,
  password,
}: SignUpProps) {
  const data = { email, username, password },
    config = { headers: { "Content-Type": "application/json" } };

  const response = await axios.post("/", data, config);
  const responseData = await response.data;
  return responseData;
}
