import type { UserId } from '../common/entity-id.type.js'

export interface UpdateOrderType {
  delivery_address?: string;
  delivery_deadline?: string;
  yacht_name?: string;
  special_instructions?: string;
  assigned_to?: UserId;
}
