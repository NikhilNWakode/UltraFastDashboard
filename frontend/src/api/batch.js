import axios from "axios";

export async function fetchBatch(widgets = null) {
  const res = await axios.post("http://localhost:3000/batch", {
    widgets: widgets || null
  });
  return res.data.data;
}
