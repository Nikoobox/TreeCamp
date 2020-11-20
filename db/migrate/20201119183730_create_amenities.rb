class CreateAmenities < ActiveRecord::Migration[5.2]
  def change
    create_table :amenities do |t|
      t.integer :spot_id, null: false
      t.boolean :portable_water, default: false, null: false
      t.boolean :kitchen, default: false, null: false
      t.boolean :shower, default: false, null: false
      t.boolean :wifi, default: false, null: false
      t.boolean :electricity, default: false, null: false
      t.boolean :bug_spray, default: false, null: false
      t.boolean :zip_line, default: false, null: false

      t.timestamps
    end
    add_index :amenities, :spot_id, unique: true
  end
end
