import { type AxiosResponse } from "axios";
import { apiClient } from "./_client.service";

export async function loadList<T>(endpoint: string): Promise<T> {
  return apiClient.get<T>(endpoint).then(dataFromResponse)
}

export async function loadItem<T>(endpoint: string, id: string): Promise<T> {
  return apiClient.get<T>(`${endpoint}/${id}`).then(dataFromResponse)
}

export async function createItem<T>(endpoint: string): Promise<T> {
    return apiClient.post<T>(endpoint, {}).then(dataFromResponse)
}

function dataFromResponse<T>(obj: AxiosResponse<T>): T {
  return obj.data as T
}
