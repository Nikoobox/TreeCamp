class Spot < ApplicationRecord
    validates :host_id, :title, :description, :price, :location, :country, :rating, :latitude, :longitude, presence: true

    belongs_to :user,
        foreign_key: :host_id,
        class_name: 'User'
   
    has_many :essentials,
        foreign_key: :spot_id,
        class_name: 'Essential'

    has_many :amenities,
        foreign_key: :spot_id,
        class_name: 'Amenity'    

    has_many :details,
        foreign_key: :spot_id,
        class_name: 'Detail'  

     has_many :activities,
        foreign_key: :spot_id,
        class_name: 'Activity'  

     has_many :bookings,
        foreign_key: :spot_id,
        class_name: 'Booking'  

    has_many :reviews,
        foreign_key: :spot_id,
        class_name: 'Review'  

end