import type { UserRole } from '../auth/user-role.enum.js'

export interface UserQueryDto {
  page?: number
  limit?: number
  search?: string
  role?: UserRole
}
