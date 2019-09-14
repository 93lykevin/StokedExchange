# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_13_233512) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "following_lists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "product_listing_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_listing_id"], name: "index_following_lists_on_product_listing_id"
    t.index ["user_id"], name: "index_following_lists_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", null: false
    t.string "brand", null: false
    t.string "release_date", null: false
    t.float "retail_price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "colorway", default: ""
    t.string "gender"
    t.string "make", default: ""
    t.string "model", default: ""
    t.string "object_identifier", null: false
    t.string "product_category", null: false
    t.integer "highest_bid"
    t.integer "last_sale"
    t.integer "lowest_ask"
    t.integer "sales_last_72"
    t.integer "new_release"
    t.string "categories", default: [], array: true
    t.integer "track_prices", default: [], array: true
    t.index ["brand"], name: "index_products_on_brand"
    t.index ["colorway"], name: "index_products_on_colorway"
    t.index ["highest_bid"], name: "index_products_on_highest_bid"
    t.index ["last_sale"], name: "index_products_on_last_sale"
    t.index ["object_identifier"], name: "index_products_on_object_identifier", unique: true
    t.index ["product_category"], name: "index_products_on_product_category"
    t.index ["release_date"], name: "index_products_on_release_date"
    t.index ["retail_price"], name: "index_products_on_retail_price"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
