export interface UserResponseDto {
  id: string
  name: string
  email: string
  image: string | null
  roles: string[]
  banned: boolean
  ban_reason: string | null
  ban_expires: string | Date | null
  created_at: string | Date
}
