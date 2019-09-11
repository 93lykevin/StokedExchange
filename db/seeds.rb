# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all

User.create(username: "demo", password: "user");

Product.create(title: "1", description: "a", brand: "v", release_date: "9", retail_price: 100.00 )
Product.create(title: "2", description: "b", brand: "w", release_date: "8", retail_price: 101.00 )
Product.create(title: "3", description: "c", brand: "x", release_date: "7", retail_price: 102.00 )
Product.create(title: "4", description: "d", brand: "y", release_date: "6", retail_price: 103.00 )
Product.create(title: "5", description: "e", brand: "z", release_date: "5", retail_price: 104.00 )