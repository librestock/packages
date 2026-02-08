import type { HateoasLink } from '../common/hateoas-link.type.js'

export interface ProductLinksDto {
  self: HateoasLink
  update: HateoasLink
  delete: HateoasLink
  category: HateoasLink
}
