json.extract! @product_listing, :id, :product_id, :seller_id, :price, :condition, :size, :listing_type
json.product do
    json.id @product_listing.product.id
    json.title @product_listing.product.title
    json.description @product_listing.product.description
    json.brand @product_listing.product.brand
    json.retail_price @product_listing.product.retail_price
    json.release_date @product_listing.product.release_date
    json.colorway @product_listing.product.colorway
    json.gender @product_listing.product.gender
    json.make @product_listing.product.make
    json.model @product_listing.product.model
    json.object_identifier @product_listing.product.object_identifier
    json.product_category @product_listing.product.product_category
    json.image_url @product_listing.product.image_url
    json.ticker_symbol @product_listing.product.ticker_symbol
    json.highest_bid @product_listing.product.highest_bid
    json.last_sale @product_listing.product.last_sale
    json.lowest_ask @product_listing.product.lowest_ask
    json.sales_last_72 @product_listing.product.sales_last_72
    json.new_release @product_listing.product.new_release
end