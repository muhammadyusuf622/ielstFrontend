import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://67e6cb20a333.ngrok-free.app/api",
  withCredentials: true,
});
