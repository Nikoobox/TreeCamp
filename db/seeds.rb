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
Review.destroy_all;



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

user7 = User.create!({
    first_name: "Marina", 
    last_name: "Zhur", 
    email: "mz@gmail.com", 
    password: "1234567"
})

user8 = User.create!({
    first_name: "Terunobu", 
    last_name: "Fujimori", 
    email: "tf@gmail.com", 
    password: "1234567"
})
# Geoffrey de Pykeford
user9 = User.create!({
    first_name: "Thomas", 
    last_name: "Pritchard", 
    email: "tp@gmail.com", 
    password: "1234567"
})

# SPOTS

spot1 = Spot.create!({
    host_id: user1.id, 
    title: "Main Tree House", 
    description: "Welcome to the landscape hotel where nature and imagination run wild. The view is breathtaking. At Treehotel nature, ecological values, comfort and modern design are combined for an exciting adventure.", 
    price: 750,
    location: 'Harads',
    country: 'Sweden',
    rating: 99,
    latitude: 66.07292558993673,
    longitude: 20.981878521577936,
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
    latitude: 50.110834,
    longitude: -122.955891,
})

img21 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/21.jpg')
img22 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/22.jpg')

spot2.photos.attach(io: img21, filename: '21.jpg')
spot2.photos.attach(io: img22, filename: '22.jpg')

spot3 = Spot.create!({
    host_id: user3.id, 
    title: "Cylindrical Treehouse", 
    description: "Taking sustainable vacationing to another level, the bilevel, beachfront treehouse sprawls over 700 square feet and was designed by Deture Culsign. This Treehouse is suspended in palm trees as living “piers” raised 6 feet above the ground. Room is outfitted with a King Bed, private bathroom, unobstructed ocean view and small lounge area with in-floor hammock", 
    price: 565,
    location: 'Juluchuca',
    country: 'Mexico',
    rating: 96,
    latitude: 17.449603,
    longitude: -101.247187,
})

img31 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/31.jpg')
img32 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/32.jpg')

spot3.photos.attach(io: img31, filename: '31.jpg')
spot3.photos.attach(io: img32, filename: '32.jpg')

spot4 = Spot.create!({
    host_id: user4.id, 
    title: "Gibbon Experience", 
    description: "The second highest tree house in a world (40 meters or 100+ feet above the ground). At the top of a giant tree, visitors and over 100 workers alike wish it will last for centuries to come. The Gibbon Experience project is meant to be an allegory of our reconciliation with the rainforest", 
    price: 190,
    location: 'Bokeo Province',
    country: 'Laos',
    rating: 94,
    latitude: 20.463667,
    longitude: 100.775925,
})

img41 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/41.jpg')
img42 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/42.jpg')

spot4.photos.attach(io: img41, filename: '41.jpg')
spot4.photos.attach(io: img42, filename: '42.jpg')

spot5 = Spot.create!({
    host_id: user5.id, 
    title: "Free Spirit Spheres", 
    description: "Spirit Spheres mission is to provide a venue for people to enjoy exceptional experiences while dwelling in a natural forest environment. We envision a truly world class resort – one that allows people to experience nature in relative luxury, while showcasing the majesty and true value of west coast rainforest.", 
    price: 275,
    location: 'Qualicum Beach',
    country: 'Canada',
    rating: 93,
    latitude: 49.382159771258294,
    longitude: -124.61408167318442,
})

img51 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/51.jpg')
img52 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/52.jpg')

spot5.photos.attach(io: img51, filename: '51.jpg')
spot5.photos.attach(io: img52, filename: '52.jpg')

spot6 = Spot.create!({
    host_id: user6.id, 
    title: "Hapuku Tree Houses", 
    description: "The Tree Houses are designed to complement the natural environment, as your bedroom in the sky. Their large windows bring the tree canopies into the bedroom and provide impressive views of Kaikoura's dramatic mountains and the Pacific Ocean.", 
    price: 710,
    location: 'Kaikoura',
    country: 'New Zealand',
    rating: 92,
    latitude: -42.31308606992812,
    longitude: 173.73696692676364,
})

img61 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/61.jpg')
img62 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/62.jpg')

spot6.photos.attach(io: img61, filename: '61.jpg')
spot6.photos.attach(io: img62, filename: '62.jpg')

spot7 = Spot.create!({
    host_id: user7.id, 
    title: "Paarman Treehouse", 
    description: "The structure is located in a small clearing among forest-like gardens, and respond similarly to the verticality of the surrounding trees in order to maximize views from the highest portion of the site. The building becomes a vertically arranged “clearing in the forest”, with living space on level one, a bedroom on level two and a roof deck on the third. A plant room is located at ground level below the building.", 
    price: 350,
    location: 'Cape Town',
    country: 'South Africa',
    rating: 93,
    latitude: -34.02222438212954,
    longitude: 18.406172208499374,
})

img71 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/71.jpg')
img72 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/72.jpeg')

spot7.photos.attach(io: img71, filename: '71.jpg')
spot7.photos.attach(io: img72, filename: '72.jpeg')

spot8 = Spot.create!({
    host_id: user8.id, 
    title: "Teahouse Tetsu", 
    description: "Minimalism and fantasy, together. The interior of this teahouse is simple and modern, while the fantastical exterior looks like something from a Hiyao Miyazaki film. The interior view of the sliding wooden doors or shutters is just beautiful.", 
    price: 270,
    location: 'Hokuto City',
    country: 'Japan',
    rating: 93,
    latitude: 35.82195406581344,
    longitude: 138.35306926866812,
})


img81 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/81.jpg')
img82 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/82.jpeg')

spot8.photos.attach(io: img81, filename: '81.jpg')
spot8.photos.attach(io: img82, filename: '82.jpeg')

spot9 = Spot.create!({
    host_id: user9.id, 
    title: "Pitchford Hall Treehouse", 
    description: "The famous Tree House at Pitchford, arguably the oldest in the world, is circa 17th Century origin - first mentioned in 1692 and situated in a large leaved lime tree (Tilia Platyphyllos).A part glazed door opens into the tree house to reveal a carved moulded cornice ceiling, stripped oak floor and gothic windows on all sides.", 
    price: 195,
    location: 'Pitchford',
    country: 'UK',
    rating: 90,
    latitude: 52.63344128930087,
    longitude: -2.6992601902108166,
})

img91 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/91.png')
img92 = open('https://app-treecamp-seeds.s3.amazonaws.com/treecamp-photos/92.jpeg')

spot9.photos.attach(io: img91, filename: '91.png')
spot9.photos.attach(io: img92, filename: '92.jpeg')

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

area7 = Area.create!({
    spot_id: spot7.id, 
    num_sites: 1, 
    ada_access: true,
    max_guests: 5
})

area8 = Area.create!({
    spot_id: spot8.id, 
    num_sites: 1, 
    ada_access: false,
    max_guests: 2
})

area9 = Area.create!({
    spot_id: spot9.id, 
    num_sites: 1, 
    ada_access: false,
    max_guests: 2
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

essential7 = Essential.create!({
    spot_id: spot7.id, 
    elevator: false, 
    campfire: false,
    toilet: true,
    pets: true
})

essential8 = Essential.create!({
    spot_id: spot8.id, 
    elevator: false, 
    campfire: false,
    toilet: true,
    pets: false
})

essential9 = Essential.create!({
    spot_id: spot9.id, 
    elevator: false, 
    campfire: false,
    toilet: false,
    pets: true
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

amenity7 = Amenity.create!({
    spot_id: spot7.id, 
    portable_water: true, 
    kitchen: true,
    shower: true,
    wifi: true,
    electricity: true,
    bug_spray: false,
    zip_line: false
})

amenity8 = Amenity.create!({
    spot_id: spot8.id, 
    portable_water: true, 
    kitchen: false,
    shower: false,
    wifi: true,
    electricity: true,
    bug_spray: false,
    zip_line: false
})

amenity9 = Amenity.create!({
    spot_id: spot9.id, 
    portable_water: false, 
    kitchen: false,
    shower: false,
    wifi: false,
    electricity: false,
    bug_spray: true,
    zip_line: true
})

# DETAIL
detail1 = Detail.create!({
    spot_id: spot1.id, 
    min_nights: '3', 
    check_in: 'after 1pm',
    check_out: 'after 11am',
    cancelation_policy: 'Full refund guaranteed',
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

detail7 = Detail.create!({
    spot_id: spot7.id, 
    min_nights: '3', 
    check_in: 'after 12pm',
    check_out: 'after 11:30am',
    cancelation_policy: 'Strict',
    on_arrival: 'N/A'
})

detail8 = Detail.create!({
    spot_id: spot8.id, 
    min_nights: '3', 
    check_in: 'after 2pm',
    check_out: 'after 11:30am',
    cancelation_policy: 'Full refund guaranteed',
    on_arrival: 'Small tea ceremony'
})

detail9 = Detail.create!({
    spot_id: spot9.id, 
    min_nights: '2', 
    check_in: 'after 3pm',
    check_out: 'after 10am',
    cancelation_policy: 'Strict',
    on_arrival: 'Guided tour around the village'
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

activity7 = Activity.create!({
    spot_id: spot7.id, 
    biking: false, 
    fishing: false, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

activity8 = Activity.create!({
    spot_id: spot8.id, 
    biking: true, 
    fishing: false, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})

activity9 = Activity.create!({
    spot_id: spot9.id, 
    biking: false, 
    fishing: false, 
    stargazing: true, 
    hiking: true,
    wildlife_watching: true
})