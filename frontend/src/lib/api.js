import axios from "axios";

// Base URL: use env var if provided, else CRA proxy path
const API_BASE = process.env.REACT_APP_API_BASE || "/api";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getStatusList() {
  const res = await api.get("/status");
  return res.data;
}

export async function createStatus(clientName) {
  const res = await api.post("/status", { client_name: clientName });
  return res.data;
}

