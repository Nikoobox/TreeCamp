# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all;
Spot.destroy_all;
Area.destroy_all;
Essential.destroy_all;
Amenity.destroy_all;
Detail.destroy_all;
Activity.destroy_all;
Booking.destroy_all;



# USERS
user = User.create!({
    first_name: "demo", 
    last_name: "user", 
    email: "demo@gmail.com", 
    password: "1234567"
})

user1 = User.create!({
    first_name: "Nikolay", 
    last_name: "Shatalov", 
    email: "nikoobox@gmail.com", 
    password: "1234567"
})

user2 = User.create!({
    first_name: "Karena", 
    last_name: "Huang", 
    email: "kh@gmail.com", 
    password: "1234567"
})

user3 = User.create!({
    first_name: "Jia", 
    last_name: "Evans", 
    email: "je@gmail.com", 
    password: "1234567"
})

user4 = User.create!({
    first_name: "Jaxon", 
    last_name: "Ford", 
    email: "jf@gmail.com", 
    password: "1234567"
})

user5 = User.create!({
    first_name: "Joseph", 
    last_name: "White", 
    email: "jw@gmail.com", 
    password: "1234567"
})

user6 = User.create!({
    first_name: "Michael", 
    last_name: "Watkins", 
    email: "mw@gmail.com", 
    password: "1234567"
})

# SPOTS
# img1 = open('https://app-treecamp-dev.amazonaws.com/treecamp_photos/11.jpg')
# img2 = open('https://app-treecamp-dev.amazonaws.com/treecamp_photos/12.jpg')

# spot1.photos.attach(io: img1, filename: '11.jpg')
# spot1.photos.attach(io: img2, filename: '12.jpg')

spot1 = Spot.create!({
    host_id: user1.id, 
    title: "Main Tree House", 
    description: "Welcome to the landscape hotel where nature and imagination run wild. The view is breathtaking. At Treehotel nature, ecological values, comfort and modern design are combined for an exciting adventure.", 
    price: 250,
    location: 'Harads',
    country: 'Sweden',
    rating: 99,
    latitude: 100.00,
    longitude: 200.00,
})

img11 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/11.jpg')
img12 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/12.jpg')

spot1.photos.attach(io: img11, filename: '11.jpg')
spot1.photos.attach(io: img12, filename: '12.jpg')



spot2 = Spot.create!({
    host_id: user2.id, 
    title: "The HemLoft", 
    description: "The HemLoft is a self-funded secret creation that is built on crown land in Canada. It hangs on a precipitous slope, in a towering stand of hemlocks, about a five minute walk from the nearest road.", 
    price: 150,
    location: 'Whistler',
    country: 'Canada',
    rating: 95,
    latitude: 100.00,
    longitude: 200.00,
})

img21 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/21.jpg')
img22 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/22.jpg')

spot2.photos.attach(io: img21, filename: '21.jpg')
spot2.photos.attach(io: img22, filename: '22.jpg')

spot3 = Spot.create!({
    host_id: user3.id, 
    title: "Cylindrical Treehouse", 
    description: "Taking sustainable vacationing to another level, the bilevel, beachfront treehouse sprawls over 700 square feet and was designed by Deture Culsign. ", 
    price: 160,
    location: 'Juluchuca',
    country: 'Mexico',
    rating: 96,
    latitude: 100.00,
    longitude: 200.00,
})

img31 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/31.jpg')
img32 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/32.jpg')

spot3.photos.attach(io: img31, filename: '31.jpg')
spot3.photos.attach(io: img32, filename: '32.jpg')

spot4 = Spot.create!({
    host_id: user4.id, 
    title: "Gibbon Experience", 
    description: "The second highest tree house in a world (40 meters or 100+ feet above the ground). At the top of a giant tree, visitors and over 100 workers alike wish it will last for centuries to come. The Gibbon Experience project is meant to be an allegory of our reconciliation with the rainforest", 
    price: 130,
    location: 'Bokeo Province',
    country: 'Laos',
    rating: 94,
    latitude: 100.00,
    longitude: 200.00,
})

img41 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/41.jpg')
img42 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/42.jpg')

spot4.photos.attach(io: img41, filename: '41.jpg')
spot4.photos.attach(io: img42, filename: '42.jpg')

spot5 = Spot.create!({
    host_id: user5.id, 
    title: "Free Spirit Spheres", 
    description: "Spirit Spheres mission is to provide a venue for people to enjoy exceptional experiences while dwelling in a natural forest environment", 
    price: 190,
    location: 'Qualicum Beach',
    country: 'Canada',
    rating: 93,
    latitude: 100.00,
    longitude: 200.00,
})

img51 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/51.jpg')
img52 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/52.jpg')

spot5.photos.attach(io: img51, filename: '51.jpg')
spot5.photos.attach(io: img52, filename: '52.jpg')

spot6 = Spot.create!({
    host_id: user6.id, 
    title: "Hapuku Tree Houses", 
    description: "The Tree Houses are designed to complement the natural environment, as your bedroom in the sky. Their large windows bring the tree canopies into the bedroom and provide impressive views of Kaikoura's dramatic mountains and the Pacific Ocean.", 
    price: 290,
    location: 'Kaikoura',
    country: 'New Zealand',
    rating: 92,
    latitude: 100.00,
    longitude: 200.00,
})

img61 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/61.jpg')
img62 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/62.jpg')

spot6.photos.attach(io: img61, filename: '61.jpg')
spot6.photos.attach(io: img62, filename: '62.jpg')

# AREAS
area1 = Area.create!({
    spot_id: spot1.id, 
    num_sites: 2, 
    ada_access: true,
    max_guests: 4
})

area2 = Area.create!({
    spot_id: spot2.id, 
    num_sites: 3, 
    ada_access: true,
    max_guests: 5
})

area3 = Area.create!({
    spot_id: spot3.id, 
    num_sites: 1, 
    ada_access: true,
    max_guests: 3
})

area4 = Area.create!({
    spot_id: spot4.id, 
    num_sites: 2, 
    ada_access: true,
    max_guests: 8
})

area5 = Area.create!({
    spot_id: spot5.id, 
    num_sites: 1, 
    ada_access: false,
    max_guests: 2
})

area6 = Area.create!({
    spot_id: spot6.id, 
    num_sites: 2, 
    ada_access: true,
    max_guests: 4
})



# ESSENTIALS
essential1 = Essential.create!({
    spot_id: spot1.id, 
    elevator: true, 
    campfire: true,
    toilet: true,
    pets: true
})

essential2 = Essential.create!({
    spot_id: spot2.id, 
    elevator: true, 
    campfire: true,
    toilet: true,
    pets: true
})

essential3 = Essential.create!({
    spot_id: spot3.id, 
    elevator: true, 
    campfire: true,
    toilet: false,
    pets: false
})

essential4 = Essential.create!({
    spot_id: spot4.id, 
    elevator: false, 
    campfire: false,
    toilet: true,
    pets: false
})

essential5 = Essential.create!({
    spot_id: spot5.id, 
    elevator: false, 
    campfire: true,
    toilet: false,
    pets: true
})

essential6 = Essential.create!({
    spot_id: spot6.id, 
    elevator: true, 
    campfire: false,
    toilet: true,
    pets: false
})

# AMENITY
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

amenity2 = Amenity.create!({
    spot_id: spot2.id, 
    portable_water: true, 
    kitchen: true,
    shower: true,
    wifi: true,
    electricity: false,
    bug_spray: false,
    zip_line: false
})

amenity3 = Amenity.create!({
    spot_id: spot3.id, 
    portable_water: true, 
    kitchen: true,
    shower: true,
    wifi: true,
    electricity: true,
    bug_spray: true,
    zip_line: true
})

amenity4 = Amenity.create!({
    spot_id: spot4.id, 
    portable_water: true, 
    kitchen: true,
    shower: true,
    wifi: false,
    electricity: true,
    bug_spray: false,
    zip_line: true
})

amenity5 = Amenity.create!({
    spot_id: spot5.id, 
    portable_water: true, 
    kitchen: false,
    shower: true,
    wifi: false,
    electricity: true,
    bug_spray: false,
    zip_line: false
})

amenity6 = Amenity.create!({
    spot_id: spot6.id, 
    portable_water: true, 
    kitchen: true,
    shower: true,
    wifi: true,
    electricity: true,
    bug_spray: false,
    zip_line: false
})

# DETAIL
detail1 = Detail.create!({
    spot_id: spot1.id, 
    min_nights: '3', 
    check_in: 'after 12pm',
    check_out: 'after 10am',
    cancelation_policy: 'Strict',
    on_arrival: 'Meet and greet'
})

detail2 = Detail.create!({
    spot_id: spot2.id, 
    min_nights: '4', 
    check_in: 'after 11am',
    check_out: 'after 10am',
    cancelation_policy: 'Strict',
    on_arrival: 'Meet and greet'
})

detail3 = Detail.create!({
    spot_id: spot3.id, 
    min_nights: '2', 
    check_in: 'after 1pm',
    check_out: 'after 12pm',
    cancelation_policy: 'Strict',
    on_arrival: 'Meet and greet'
})

detail4 = Detail.create!({
    spot_id: spot4.id, 
    min_nights: '3', 
    check_in: 'after 12pm',
    check_out: 'after 10am',
    cancelation_policy: 'Strict',
    on_arrival: 'Train station pick up'
})

detail5 = Detail.create!({
    spot_id: spot5.id, 
    min_nights: '4', 
    check_in: 'after 11am',
    check_out: 'after 10am',
    cancelation_policy: 'Strict',
    on_arrival: 'Meet and small guided tour'
})

detail6 = Detail.create!({
    spot_id: spot6.id, 
    min_nights: '2', 
    check_in: 'after 12pm',
    check_out: 'after 11am',
    cancelation_policy: 'Strict',
    on_arrival: 'Meet and greet'
})

# ACTIVITY
activity1 = Activity.create!({
    spot_id: spot1.id, 
    biking: true, 
    fishing: true, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

activity2 = Activity.create!({
    spot_id: spot2.id, 
    biking: true, 
    fishing: true, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

activity3 = Activity.create!({
    spot_id: spot3.id, 
    biking: true, 
    fishing: true, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

activity4 = Activity.create!({
    spot_id: spot4.id, 
    biking: false, 
    fishing: true, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

activity5 = Activity.create!({
    spot_id: spot5.id, 
    biking: false, 
    fishing: false, 
    stargazing: false, 
    hiking: true,
    wildlife_watching: true
})

activity6 = Activity.create!({
    spot_id: spot6.id, 
    biking: false, 
    fishing: false, 
    stargazing: false, 
    hiking: true,
    wildlife_watching: false
})