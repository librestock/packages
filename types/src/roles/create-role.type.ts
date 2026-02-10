import type { RolePermissionDto } from './role-permission.type.js'

export interface CreateRoleDto {
  name: string
  description?: string
  permissions: RolePermissionDto[]
}
