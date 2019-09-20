@product_listings.each do |product_listing|
  json.set! product_listing.id do
    json.extract! product_listing, :id, :product_id, :seller_id, :price, :condition, :size, :product
  end
end

# json.products do 
#   @current_user.products.each do |product|
#     json.set! product.id do
#       json.extract! product, :id, :colorway, :gender, :make, :model, :object_identifier, :product_category, :ticker_symbol, :highest_bid, :last_sale, :lowest_ask, :sales_last_72, :new_release, :categories, :track_prices, :release_date, :retail_price, :brand, :description, :title, :image_url
#     end
#   end
# end