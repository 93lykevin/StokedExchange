class AddListingTypeToProductListings < ActiveRecord::Migration[5.2]
  def change
    add_column :product_listings, :listing_type, :string, default: ""
  end
end
