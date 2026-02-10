import type { RolePermissionDto } from './role-permission.type.js'

export interface UpdateRoleDto {
  name?: string
  description?: string
  permissions?: RolePermissionDto[]
}
