import type { PaginationMeta } from '../common/pagination-meta.type.js'
import type { UserResponseDto } from './user-response.type.js'

export interface PaginatedUsersResponseDto {
  data: UserResponseDto[]
  meta: PaginationMeta
}
