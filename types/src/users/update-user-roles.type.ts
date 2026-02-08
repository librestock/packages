import type { UserRole } from '../auth/user-role.enum.js'

export interface UpdateUserRolesDto {
  roles: UserRole[]
}
