class Booking < ApplicationRecord
    validates :spot_id, :visitor_id, :num_visitors, :checkin_date, :checkout_date, :total_cost ,presence: true

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'

    belongs_to :visitor,
        foreign_key: :visitor_id,
        class_name: 'User'
end