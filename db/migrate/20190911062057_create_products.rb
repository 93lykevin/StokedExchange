class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|

      t.string :title, null: false
      t.string :description, null: false
      t.string :brand, null: false
      t.string :release_date, null: false
      t.float :retail_price, null: false

      t.timestamps
    end
  end
end
