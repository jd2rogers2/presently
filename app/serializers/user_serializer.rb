class UserSerializer < ActiveModel::Serializer
  def list
    {id: object.list.id, user: {id: object.list.user.id, username: object.list.user.username}}
  end

  attributes :id, :username, :bday, :aboutme, :email, :list
  has_many :purchases, serializer: ItemSerializer
  has_many :friends, serializer: UserSerializer
end
