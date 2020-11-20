class Amenity < ApplicationRecord
    validates :spot_id, :portable_water,:kitchen, :shower, :wifi, :electricity, :bug_spray, :zip_line, presence: true

    validates :portable_water, inclusion: {in: [true, false]}
    validates :kitchen, inclusion: {in: [true, false]}
    validates :shower, inclusion: {in: [true, false]}
    validates :wifi, inclusion: {in: [true, false]}
    validates :electricity, inclusion: {in: [true, false]}
    validates :bug_spray, inclusion: {in: [true, false]}
    validates :zip_line, inclusion: {in: [true, false]}


    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'

end