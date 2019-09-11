class Product < ApplicationRecord
    validates :title, :description, :brand, :release_date, :retail_price, presence: true
end
