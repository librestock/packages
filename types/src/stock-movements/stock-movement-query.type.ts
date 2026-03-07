import type { StockMovementReason } from './stock-movement-reason.enum.js'
import type { LocationId, ProductId } from '../common/entity-id.type.js'

export interface StockMovementQueryDto {
  page?: number
  limit?: number
  product_id?: ProductId
  location_id?: LocationId
  reason?: StockMovementReason
  date_from?: string
  date_to?: string
}
