import { ValidRoute } from '@/enum/ValidRoute'
import type { AppRoute } from '@/types/AppRouter'

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
      return 'Dashboard'
    case ValidRoute.CUSTOMER:
      return 'Clienti'
    case ValidRoute.PRODUCT:
      return 'Prodotti'
    default:
      return path.replace('/', '').charAt(0).toUpperCase() + path.replace('/', '').slice(1)
  }
}
