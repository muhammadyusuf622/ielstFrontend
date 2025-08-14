import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://639d32809d5c.ngrok-free.app/api",
  withCredentials: true,
});
