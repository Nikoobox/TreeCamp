# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all;
Spot.destroy_all;
Area.destroy_all;
Essential.destroy_all;
Amenity.destroy_all;
Detail.destroy_all;
Activity.destroy_all;

user = User.create!({
    first_name: "demo", 
    last_name: "user", 
    email: "demo@gmail.com", 
    password: "1234567"
})

user2 = User.create!({
    first_name: "Nikolay", 
    last_name: "Shatalov", 
    email: "nikoobox@gmail.com", 
    password: "1234567"
})

spot1 = Spot.create!({
    host_id: user.id, 
    title: "Main Tree House", 
    description: "The trendy treehouse is located on the west coast of Norway. The view is breathtaking. Imagine seeing the sunset from this spectacular place", 
    price: 200,
    location: 'Oslo',
    country: 'Norway',
    rating: 95,
    latitude: 100.00,
    longitude: 200.00,
})

area1 = Area.create!({
    spot_id: spot1.id, 
    num_sites: 2, 
    ada_access: true,
    max_guests: 4
})

essential1 = Essential.create!({
    spot_id: spot1.id, 
    elevator: true, 
    campfire: true,
    toilet: true,
    pets: true
})

amenity1 = Amenity.create!({
    spot_id: spot1.id, 
    portable_water: true, 
    kitchen: true,
    shower: true,
    wifi: true,
    electricity: true,
    bug_spray: true,
    zip_line: true
})

detail1 = Detail.create!({
    spot_id: spot1.id, 
    min_nights: '3', 
    check_in: 'after 12pm',
    check_out: 'after 10am',
    cancelation_policy: 'Strict',
    on_arrival: 'Meet and greet'
})

activity1 = Activity.create!({
    spot_id: spot1.id, 
    biking: true, 
    fishing: true, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

