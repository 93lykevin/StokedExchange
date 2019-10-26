@product_listings.each do |product_listing|
  json.set! product_listing.id do
    json.extract! product_listing, :id, :product_id, :seller_id, :price, :condition, :size, :product, :listing_type
  end
end
