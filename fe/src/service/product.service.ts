import type { Product } from '@/types/Products'
import { dataFromResponse } from '@/utils'
import { apiClient } from './api-client.service'

const endpoint = 'product'

export function loadProducts(): Promise<Product[]> {
  return apiClient.get<Product[]>(endpoint).then(dataFromResponse)
}
