# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all

User.create(username: "mohito", password: "burrito", first_name: "Carne", last_name: "Asada", email: "california@lolitas.com");
User.create(username: "m", password: "b", first_name: "c", last_name: "a", email: "c@lolitas.com");

Product.create(title: "1", description: "a", brand: "v", release_date: "9", retail_price: 100.00 )
Product.create(title: "2", description: "b", brand: "w", release_date: "8", retail_price: 101.00 )
Product.create(title: "3", description: "c", brand: "x", release_date: "7", retail_price: 102.00 )
Product.create(title: "4", description: "d", brand: "y", release_date: "6", retail_price: 103.00 )
Product.create(title: "5", description: "e", brand: "z", release_date: "5", retail_price: 104.00 )
Product.create(title: "11", description: "ab", brand: "vl", release_date: "98", retail_price: 100.00 )
Product.create(title: "22", description: "bc", brand: "wm", release_date: "87", retail_price: 101.00 )
Product.create(title: "33", description: "cd", brand: "xn", release_date: "76", retail_price: 102.00 )
Product.create(title: "44", description: "de", brand: "yo", release_date: "65", retail_price: 103.00 )
Product.create(title: "55", description: "ef", brand: "zp", release_date: "54", retail_price: 104.00 )
Product.create(title: "11", description: "ag", brand: "vq", release_date: "93", retail_price: 100.00 )
Product.create(title: "22", description: "bh", brand: "wr", release_date: "82", retail_price: 101.00 )
Product.create(title: "33", description: "ci", brand: "xs", release_date: "71", retail_price: 102.00 )
Product.create(title: "44", description: "dj", brand: "yt", release_date: "60", retail_price: 103.00 )
Product.create(title: "55", description: "ek", brand: "zu", release_date: "51", retail_price: 104.00 )
Product.create(title: "1", description: "a", brand: "v", release_date: "9", retail_price: 100.00 )
Product.create(title: "2", description: "b", brand: "w", release_date: "8", retail_price: 101.00 )
Product.create(title: "3", description: "c", brand: "x", release_date: "7", retail_price: 102.00 )
Product.create(title: "4", description: "d", brand: "y", release_date: "6", retail_price: 103.00 )
Product.create(title: "5", description: "e", brand: "z", release_date: "5", retail_price: 104.00 )
Product.create(title: "11", description: "ab", brand: "vl", release_date: "98", retail_price: 100.00 )
Product.create(title: "22", description: "bc", brand: "wm", release_date: "87", retail_price: 101.00 )
Product.create(title: "33", description: "cd", brand: "xn", release_date: "76", retail_price: 102.00 )
Product.create(title: "44", description: "de", brand: "yo", release_date: "65", retail_price: 103.00 )
Product.create(title: "55", description: "ef", brand: "zp", release_date: "54", retail_price: 104.00 )
Product.create(title: "11", description: "ag", brand: "vq", release_date: "93", retail_price: 100.00 )
Product.create(title: "22", description: "bh", brand: "wr", release_date: "82", retail_price: 101.00 )
Product.create(title: "33", description: "ci", brand: "xs", release_date: "71", retail_price: 102.00 )
Product.create(title: "44", description: "dj", brand: "yt", release_date: "60", retail_price: 103.00 )
Product.create(title: "55", description: "ek", brand: "zu", release_date: "51", retail_price: 104.00 )