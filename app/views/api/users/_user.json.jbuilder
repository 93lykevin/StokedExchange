# json.extract! user, :id, :username, :first_name, :last_name, :email, :product_listings

json.set! user.id do 
    json.id user.id
    json.username user.username
    json.firstName user.first_name
    json.lastName user.last_name
    json.email user.email
    user.product_listings.each do |listing|
        json.set! listing.id do
            json.id listing.id
            json.price listing.price
            json.condition listing.condition
            json.size listing.size
            json.seller_id listing.seller_id
            json.product_id listing.product_id
            json.product listing.product
        end
    end
end
# json.user do
#     json.id user.id
#     json.username user.username
#     json.first_name user.first_name
#     json.last_name user.last_name
#     json.email user.email
#     json.array! 
#     end
# end
# json.product_listing do
#     user.product_listings.each do |listing|
#         json.extract! listing, :id, :product
#     end
# end

# user.product_listings
# json.product_listings user.product_listings
# json.products user.products

# user.product_listings.each do |product_listing|
#     json.set! product_listing.id do 
#         json.extract! product_listing, :id, :product_id, :seller_id, :price, :condition, :size
#         json.product product_listing.product
#     end
# end

# json.array!(user.product_listings) do |json, product_listing|
#     json.set! product_listing.id do 
#         json.product_listing product_listing
#         json.product product_listing.product
#     end
    
    
    # user.product_listings.each do |product_listing|
    #     json.set! product_listing.id do 
    #         # json.extract! product_listing
    #         json.product_listing product_listing
    #         json.product product_listing.product
    #     end
    # end
