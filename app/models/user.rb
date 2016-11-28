class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :friendships
  has_many :friends, through: :friendships, foreign_key: 'friend_id'
  has_one :list
  has_many :purchases, class_name: 'Item', foreign_key: 'purchaser_id'
  has_many :events
  after_create :add_list, :bday_to_event
  # validates :bday, presence: true
  # validates :aboutme, presence: true

  def add_list
    List.create(user_id: self.id)
  end

  def bday_to_event
    if bday
      Event.create(user_id: self.id, date: bday, name: "my birthday")
    end
  end
end
