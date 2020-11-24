class Activity < ApplicationRecord

    # validates :spot_id, :biking, :fishing, :stargazing, :hiking, :wildlife_watching, presence: true

    validates :biking, inclusion: {in: [true, false]}
    validates :fishing, inclusion: {in: [true, false]}
    validates :stargazing, inclusion: {in: [true, false]}
    validates :hiking, inclusion: {in: [true, false]}
    validates :wildlife_watching, inclusion: {in: [true, false]}

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'

end