class EditBookings < ActiveRecord::Migration[5.2]
  def change
    remove_index :bookings, :spot_id
    remove_index :bookings, :visitor_id
    add_index :bookings, :spot_id
    add_index :bookings, :visitor_id
  end
end
