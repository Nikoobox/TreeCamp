class EditReviews2 < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :spot_id
    remove_index :reviews, :author_id
    add_index :reviews, :spot_id
    add_index :reviews, :author_id
  end
end
