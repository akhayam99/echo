import type { Customer } from '@/types/Customer'
import { dataFromResponse } from '@/utils'
import { apiClient } from './api-client.service'

const endpoint = 'customer'

export async function loadCustomers(): Promise<Customer[]> {
  return apiClient.get<Customer[]>(endpoint).then(dataFromResponse)
}
