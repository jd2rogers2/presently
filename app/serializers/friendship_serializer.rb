class FriendshipSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user, serializer: UserSerializer
  has_one :friend, serializer: UserSerializer
end
