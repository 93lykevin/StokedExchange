class ProductListing < ApplicationRecord
    validates :selling_price, :condition, :size,  presence: true
    
    belongs_to :seller,
    foreign_key: :seller_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

end
