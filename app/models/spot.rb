class Spot < ApplicationRecord
    validates :host_id, :title, :description, :price, :location, :country, :rating, :latitude, :longitude, presence: true

    has_many_attached :photos

    belongs_to :user,
        foreign_key: :host_id,
        class_name: 'User'

    has_one :area,
        foreign_key: :spot_id,
        class_name: 'Area'
   
    has_one :essential,
        foreign_key: :spot_id,
        class_name: 'Essential'

    has_one :amenity,
        foreign_key: :spot_id,
        class_name: 'Amenity'    

    has_one :detail,
        foreign_key: :spot_id,
        class_name: 'Detail'  

     has_one :activity,
        foreign_key: :spot_id,
        class_name: 'Activity'  

     has_many :bookings,
        foreign_key: :spot_id,
        class_name: 'Booking'  

    has_many :reviews,
        foreign_key: :spot_id,
        class_name: 'Review'  

end