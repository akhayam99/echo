import { ValidRoute } from '@/enum/ValidRoute'
import type { AppRoute } from '@/types/AppRouter'
import type { AxiosResponse } from 'axios'

export function dataFromResponse<T>(obj: AxiosResponse<T>): T {
  return obj.data as T
}

export function appRoutesObj(): AppRoute[] {
  return Object.values(ValidRoute).map((path, id) => ({
    id,
    path,
    name: getRouteName(path),
  }))
}

export function getRouteName(path: ValidRoute): string {
  switch (path) {
    case ValidRoute.HOME:
      return 'Home'
    case ValidRoute.CUSTOMER:
      return 'Customer'
    case ValidRoute.PRODUCT:
      return 'Product'
    default:
      return 'Unknown'
  }
}
