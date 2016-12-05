class Item < ApplicationRecord
  has_attached_file :image, 
                    :styles => {large: "1000x1000>", medium: "300x300>", thumb: "100x100#"},
                    default_url: "http://i.imgur.com/T12gPlq.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :list
  belongs_to :purchaser, optional: true, class_name: 'User'
end
