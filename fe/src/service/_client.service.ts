import { environment } from "@/environment/environment";
import axios from "axios";

const baseURL = environment.apiUrl
const headers = {}
const withCredentials = false

export const apiClient = axios.create({ baseURL, headers, withCredentials })
