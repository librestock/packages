import type { Permission } from '../auth/permission.enum.js'
import type { Resource } from '../auth/resource.enum.js'

export interface RolePermissionDto {
  resource: Resource
  permission: Permission
}
