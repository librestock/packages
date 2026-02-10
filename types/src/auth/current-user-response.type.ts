import type { Permission } from './permission.enum.js'
import type { Resource } from './resource.enum.js'

export interface CurrentUserResponseDto {
  id: string
  name: string
  email: string
  image?: string
  roles: string[]
  permissions: Partial<Record<Resource, Permission[]>>
}
