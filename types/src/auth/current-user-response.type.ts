import type { Permission } from './permission.enum'
import type { Resource } from './resource.enum'

export interface CurrentUserResponseDto {
  id: string
  name: string
  email: string
  image?: string
  roles: string[]
  permissions: Partial<Record<Resource, Permission[]>>
}
