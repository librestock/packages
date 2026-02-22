import type { PaginationMeta } from '../common/pagination-meta.type.js'
import type { SupplierResponseDto } from './supplier-response.type.js'

export interface PaginatedSuppliersResponseDto {
  data: SupplierResponseDto[]
  meta: PaginationMeta
}
