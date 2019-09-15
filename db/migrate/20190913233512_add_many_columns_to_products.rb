class AddManyColumnsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :colorway,  :string, default: ""
    add_column :products, :gender, :string 
    add_column :products, :make, :string, default: ""
    add_column :products, :model, :string, default: ""
    add_column :products, :object_identifier, :string, null: false
    add_column :products, :product_category, :string, null: false
    add_column :products, :image_url, :string
    add_column :products, :ticker_symbol, :string

    add_column :products, :highest_bid, :int
    add_column :products, :last_sale, :int
    add_column :products, :lowest_ask, :int
    add_column :products, :sales_last_72, :int
    add_column :products, :new_release, :int

    add_column :products, :categories, :string, array: true, default: []
    add_column :products, :track_prices, :int, array: true, default: []

    add_index :products, :colorway
    add_index :products, :brand
    add_index :products, :release_date
    add_index :products, :highest_bid
    add_index :products, :last_sale
    add_index :products, :object_identifier, unique: true
    add_index :products, :retail_price
    add_index :products, :product_category
  end
end


# //brand: string === brand
# //categories: array
# //colorway: string
# //gender: string
# //highest_bid: int
# //last_sale: int
# //lowest_ask: int
# //make: string
# //model: string
# # //name: string === title
# //new_release: boolean
# //object_id: string
# //////////////////price://////
# //product_category: string
# # //release_date: string === release_date
# //sales_last_72: int
# # //searchable_traits: Retail Price: int === retail_price
# # //description: string === desciption
# //style_id: string