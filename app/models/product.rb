class Product < ApplicationRecord
    validates :colorway, presence: true
    validates :make, presence: true
    validates :model, presence: true
    validates :object_identifier, presence: true, uniqueness: true
    validates :product_category, presence: true

    has_many :product_listings
    
end
