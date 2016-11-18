class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  has_one :purchaser, serializer: UserSerializer
  has_one :list, serializer: ListSerializer
end
