class Review < ApplicationRecord
    validates :spot_id, :author_id, :title, :body,  presence: true

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: 'Spot'

    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

end