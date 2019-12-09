json.extract! user, :id, :username, :first_name, :last_name, :email#, :product_listings, :products

json.photoUrl url_for(user.photo)

json.productListings do 
    user.product_listings.each do |listing|
        json.set! listing.id do
            json.id listing.id
            json.price listing.price
            json.condition listing.condition
            json.size listing.size
            json.seller_id listing.seller_id
            json.product_id listing.product_id
            # json.product listing.product
        end
    end
end

json.products do 
    user.products.each do |product|
        json.set! product.id do
            json.id product.id
            json.title product.title
            json.description product.description
            json.brand product.brand
            json.retail_price product.retail_price
            json.release_date product.release_date
            json.colorway product.colorway
            json.gender product.gender
            json.make product.make
            json.model product.model
            json.object_identifier product.object_identifier
            json.product_category product.product_category
            json.image_url product.image_url
            json.ticker_symbol product.ticker_symbol
            json.highest_bid product.highest_bid
            json.last_sale product.last_sale
            json.lowest_ask product.lowest_ask
            json.sales_last_72 product.sales_last_72
            json.new_release product.new_release
        end
    end
end


# json.products user.products

# THIS GETS ME USERS{PRODUCTLISTINGS{PRODUCTS}}
# json.id user.id
# json.username user.username
# json.firstName user.first_name
# json.lastName user.last_name
# json.email user.email
# json.productListings user.product_listings.each do |listing|
#     json.set! listing.id do
#         json.id listing.id
#         json.price listing.price
#         json.condition listing.condition
#         json.size listing.size
#         json.seller_id listing.seller_id
#         json.product_id listing.product_id
#         json.product listing.product
#     end
# end
