import type { ClientStatus } from './client-status.enum.js'

export interface ClientQueryDto {
  page?: number
  limit?: number
  q?: string
  account_status?: ClientStatus
}
