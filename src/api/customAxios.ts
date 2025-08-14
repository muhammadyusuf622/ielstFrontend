import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://ed0dce324f2e.ngrok-free.app/api",
  withCredentials: true,
});
