class ChangeSellingPricesColumnToPricesInProductListings < ActiveRecord::Migration[5.2]
  def change
    rename_column :product_listings, :selling_price, :price
  end
end
