import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchBatch() {
  const res = await axios.post(`${API_URL}/batch`, {
    widgets: null, // fetch all widgets
  });

  return res.data.data;
}
