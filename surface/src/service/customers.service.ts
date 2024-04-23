import type { Customer } from '@/types/Customer'
import {createItem, loadItem, loadList} from './_crud.service'


const endpoint = 'customers'

export async function loadCustomers(): Promise<Customer[]> {
  return loadList(`${endpoint}`)
}

export async function loadCustomer(id: string): Promise<Customer> {
  return loadItem(`${endpoint}`, id)
}

export async function createCustomer(): Promise<Customer>{
  return createItem(`${endpoint}`)
}
