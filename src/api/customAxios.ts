import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://a65ddfb7ea3f.ngrok-free.app/api",
  withCredentials: true,
});
