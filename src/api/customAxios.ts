import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://403b174c6992.ngrok-free.app/api",
  withCredentials: true,
});
