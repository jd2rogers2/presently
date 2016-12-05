class ListSerializer < ActiveModel::Serializer
  def items
    return object.items.collect do |item|
      {id: item.id, name: item.name, url: item.url, purchaser_id: item.purchaser_id, list_id: item.list_id, notes: item.notes, price: item.price, image: item.image, purchaser: item.purchaser}
    end
  end

  attributes :id, :items, :user_id
  has_one :user, serializer: UserSerializer
  # has_many :items
end
