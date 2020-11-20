class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.integer :spot_id, null: false
      t.integer :num_sites, null: false
      t.integer :max_guests, null: false
      t.boolean :max_guests, default: false, null: false
      t.boolean :ada_access, default: false, null: false

      t.timestamps
    end

    add_index :areas, :spot_id, unique: true
  end
end
