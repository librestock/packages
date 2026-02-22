export interface PhotoResponseDto {
  id: string
  product_id: string
  filename: string
  mimetype: string
  size: number
  storage_path: string
  uploaded_by: string | null
  display_order: number
  created_at: Date
}
