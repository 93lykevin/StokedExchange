@product_listings.each do |product_listing|
  json.set! product_listing.id do
    json.extract! product_listing, :id, :product_id, :seller_id, :selling_price, :condition, :size
  end
end