class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :price, null: false
      t.string :location, null: false
      t.string :country, null: false
      t.integer :rating, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.timestamps
    end
    add_index :spots, :host_id, unique: true
  end
end
