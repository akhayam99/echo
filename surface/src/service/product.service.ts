import type { Product } from '@/types/Products'
import { loadItem, loadList } from './_crud.service'

const endpoint = 'product'

export async function loadProducts(): Promise<Product[]> {
  return loadList(`${endpoint}`)
}

export async function loadProduct(id: string): Promise<Product> {
  return loadItem(`${endpoint}`, id)
}
