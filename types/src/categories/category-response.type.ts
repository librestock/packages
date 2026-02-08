import type { BaseResponseDto } from '../common/base-response.type.js'

export interface CategoryResponseDto extends BaseResponseDto {
  id: string
  name: string
  parent_id: string | null
  description: string | null
}
