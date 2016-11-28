class UserSerializer < ActiveModel::Serializer
  def list
    {id: object.list.id, user: {id: object.list.user.id, username: object.list.user.username}}
  end

  def friends
    array = object.friends.collect do |fri|
      events_obj = fri.events.collect do |event|
        {id: event.id, name: event.name, date: event.date, username: event.user.username}
      end  
      {id: fri.id, username: fri.username, aboutme: fri.aboutme, email: fri.email, friendship_id: Friendship.find_by(user_id: object.id, friend_id: fri.id).id, list: {id: fri.list.id}, events: events_obj}
    end
    return array.uniq
  end

  attributes :id, :username, :events, :bday, :aboutme, :email, :list, :friends
  has_many :purchases, serializer: ItemSerializer
  # has_many :friends, serializer: UserSerializer
end
