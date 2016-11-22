class Item < ApplicationRecord
  belongs_to :list
  belongs_to :purchaser, class_name: 'User'
  # validates :purchaser, presence: true, allow_nil: true
end
