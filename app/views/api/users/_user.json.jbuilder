json.extract! user, :id, :username, :first_name, :last_name, :email#, :product_listings, :products


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
