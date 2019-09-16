# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(username: "mohito", password: "burrito", first_name: "Carne", last_name: "Asada", email: "california@lolitas.com")
User.create!(username: "maria", password: "tequila", first_name: "French", last_name: "Fries", email: "friesb4guyz@lolitas.com")
User.create!(username: "manhattan", password: "drink", first_name: "sweet", last_name: "vermouth", email: "manhattan@lolitas.com")

User.create!(username: "butter", password: "chicken", first_name: "indian", last_name: "food", email: "butter@lolitas.com")
User.create!(username: "eric", password: "cartman", first_name: "eric", last_name: "cartman", email: "eric@southpark.com")
User.create!(username: "kyle", password: "broflovski", first_name: "kyle", last_name: "brovlofski", email: "kyle@southpark.com")
User.create!(username: "stan", password: "marsh", first_name: "stan", last_name: "marsh", email: "stan@southpark.com")

User.create!(username: "mila", password: "thecat", first_name: "demon", last_name: "child", email: "mila@lolitas.com")
User.create!(username: "fluffy", password: "thefatcat", first_name: "fat", last_name: "loyal", email: "fluffy@lolitas.com")
User.create!(username: "leo", password: "theking", first_name: "orange", last_name: "lazy", email: "leo@lolitas.com")
User.create!(username: "kiki", password: "thedog", first_name: "cute", last_name: "doofus", email: "kiki@southpark.com")

User.create!(username: "sauce", password: "boss", first_name: "kevin", last_name: "saue", email: "kevin@terracehouse.com")
User.create!(username: "stain", password: "god", first_name: "cuong", last_name: "nguyen", email: "cuong@terracehouse.com")
User.create!(username: "themom", password: "megan", first_name: "johanna", last_name: "hoang", email: "johanna@terracehouse.com")
User.create!(username: "omega", password: "monkas", first_name: "scott", last_name: "tang", email: "scott@terracehouse.com")

