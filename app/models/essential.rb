class Essential < ApplicationRecord
    validates :spot_id, :elevator, :campfire, :toilet, :pets, presence: true

    validates :elevator, inclusion: {in: [true, false]}
    validates :campfire, inclusion: {in: [true, false]}
    validates :toilet, inclusion: {in: [true, false]}
    validates :pets, inclusion: {in: [true, false]}

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'
end