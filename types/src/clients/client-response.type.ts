import type { BaseResponseDto } from '../common/base-response.type.js'
import type { ClientStatus } from './client-status.enum.js'

export interface ClientResponseDto extends BaseResponseDto {
  id: string
  company_name: string
  contact_person: string
  email: string
  yacht_name: string | null
  phone: string | null
  billing_address: string | null
  default_delivery_address: string | null
  account_status: ClientStatus
  payment_terms: string | null
  credit_limit: number | null
  notes: string | null
}
