import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://4c84e0a16c26.ngrok-free.app/api",
  withCredentials: true,
});
