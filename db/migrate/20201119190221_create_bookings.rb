class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :visitor_id, null: false
      t.integer :num_visitors, null: false
      t.date :checkin_date, null: false
      t.date :checkout_date, null: false
      t.integer :total_cost, null: false
  
      t.timestamps
    end
    add_index :bookings, :spot_id, unique: true
    add_index :bookings, :visitor_id, unique: true
  end
end
