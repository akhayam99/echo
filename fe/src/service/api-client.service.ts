import { environment } from "@/environment/environment";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: environment.apiUrl,
  withCredentials: false,
  headers: {},
})
