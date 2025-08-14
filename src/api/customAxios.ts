import axios from "axios";


export const customAxios = axios.create({
  baseURL: "https://87712e53a8db.ngrok-free.app/api",
  withCredentials: true,
});
