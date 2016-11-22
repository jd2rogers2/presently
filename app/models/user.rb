class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :friendships
  has_many :friends, through: :friendships, foreign_key: 'friend_id'
  has_one :list
  has_many :purchases, class_name: 'Item', foreign_key: 'purchaser_id'
  after_create :add_list

  def add_list
    List.create(user_id: self.id)
  end
end
