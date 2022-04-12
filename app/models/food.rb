class Food < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites
    validates :title, presence: true

end
