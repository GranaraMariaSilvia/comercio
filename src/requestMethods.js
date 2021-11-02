import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjQ4NTc2ZGI3N2I2MjdkMTM0MGQxYSIsImlhdCI6MTYzMzk4Mzc3OCwiZXhwIjoxNjM0MjQyOTc4fQ.xZpl6G9RgJ1ZwWBWlL6h0I4EFNbGUED02O8TnxkJ1tU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
