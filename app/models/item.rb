class Item < ApplicationRecord
  belongs_to :list
  has_one :purchaser, class_name: 'User'
  # validates :purchaser, presence: true, allow_nil: true
end
