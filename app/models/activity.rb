class Activity < ApplicationRecord

    validates :spot_id, :biking, :fishing, :stargazing, :hiking, :wildlife_watching, presence: true

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'

end