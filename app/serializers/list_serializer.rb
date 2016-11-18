class ListSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, serializer: UserSerializer
  has_one :purchaser, serializer: UserSerializer
  has_many :items, serializer: ItemSerializer
end
