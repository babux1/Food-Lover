class Favorite < ApplicationRecord
  belongs_to :food
  belongs_to :user
  # validates :title, presence: true
end
