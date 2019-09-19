class CreateProductListings < ActiveRecord::Migration[5.2]
  def change
    create_table :product_listings do |t|
      t.integer :product_id, null: false
      t.integer :seller_id, null: false
      t.integer :price, null: false
      t.string :condition, null: false
      t.string :size, null: false
      t.timestamps
    end

    add_index :product_listings, :product_id
    add_index :product_listings, :seller_id
  end
end
