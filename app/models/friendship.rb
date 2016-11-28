class Friendship < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'
  validate :check_user_and_friend

  def check_user_and_friend
    errors.add(:friend, "can't be the same as user") if user_id == friend_id
  end
end
