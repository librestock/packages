import { OrderStatus } from './order-status.enum.js';
import type { ClientId } from '../common/entity-id.type.js'

export interface OrderQueryType {
  page?: number;
  limit?: number;
  q?: string;
  client_id?: ClientId;
  status?: OrderStatus;
  date_from?: string;
  date_to?: string;
}
