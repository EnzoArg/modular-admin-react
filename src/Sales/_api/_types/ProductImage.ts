import Entity, { EntityId } from '_api/_types/Entity'

export default interface ProductImage extends Entity {
  id?: EntityId
  name?: string
  url?: string
}
