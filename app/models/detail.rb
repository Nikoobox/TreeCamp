class Detail < ApplicationRecord
    validates :spot_id, :min_nights, :check_in, :check_out, :cancelation_policy, :on_arrival, presence: true

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'

end