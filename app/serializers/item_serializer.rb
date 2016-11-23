class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :list, :purchaser
end
