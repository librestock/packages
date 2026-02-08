import type { PaginationMeta } from '../common/pagination-meta.type.js'
import type { ClientResponseDto } from './client-response.type.js'

export interface PaginatedClientsResponseDto {
  data: ClientResponseDto[]
  meta: PaginationMeta
}
