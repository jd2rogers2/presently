class Item < ApplicationRecord
  belongs_to :list
  belongs_to :purchaser, optional: true, class_name: 'User'
end
