class EditAreas < ActiveRecord::Migration[5.2]
  def change
    remove_column :areas, :max_guests
    add_column :areas, :max_guests, :integer, null: false
  end
end
