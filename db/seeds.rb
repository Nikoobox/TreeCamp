# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all;

user = User.create!({
    first_name: "demo", 
    last_name: "user", 
    email: "demo@gmail.com", 
    password: "1234567"
})

spot1 = Spot.create!({
    host_id: 1, 
    title: "Main Tree House", 
    description: "very very tall tree", 
    price: 200,
    location: 'Oslo',
    country: 'Norway',
    rating: 9,
    latitude: 100.00,
    longitude: 200.00,
})

