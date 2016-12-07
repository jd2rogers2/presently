class ItemSerializer < ActiveModel::Serializer
  def list
    return {id: object.list.id, 
       user_id: object.list.user_id,
      username: object.list.user.username
    }
  end

  attributes :id, :name, :url, :list, :purchaser, :price, :notes, :image
end
