class Item < ApplicationRecord
  belongs_to :list
  belongs_to :purchaser, class_name: 'User'
end
