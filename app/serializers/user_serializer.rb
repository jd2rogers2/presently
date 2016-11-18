class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bday, :aboutme, :email
  # has_many :purchases, serializer: ItemSerializer
  has_one :list, serializer: ListSerializer
  has_many :friends, serializer: UserSerializer
end
