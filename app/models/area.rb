class Area < ApplicationRecord
    validates :spot_id, :num_sites, :max_guests, presence: true

    validates :ada_access, inclusion: {in: [true, false]}

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'
   
end