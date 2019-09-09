class CreateFollowingLists < ActiveRecord::Migration[5.2]
  def change
    create_table :following_lists do |t|
      t.integer :user_id, null: false
      t.integer :product_listing_id, null: false

      t.timestamps
    end
    
    add_index :following_lists, :user_id
    add_index :following_lists, :product_listing_id
  end
end
