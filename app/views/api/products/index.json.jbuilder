@products.each do |product|
  json.set! product.object_identifier do
    json.extract! product, :colorway, :gender, :make, :model, :object_identifier, :product_category, :highest_bid, :last_sale, :lowest_ask, :sales_last_72, :new_release, :categories, :track_prices, :release_date, :retail_price, :brand, :description, :title
  end
end