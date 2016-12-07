class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :user, :date
end
