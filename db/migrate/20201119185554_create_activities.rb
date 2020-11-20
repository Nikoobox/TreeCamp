class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.integer :spot_id, null: false
      t.boolean :biking, default: false, null: false
      t.boolean :fishing, default: false, null: false
      t.boolean :stargazing, default: false, null: false
      t.boolean :hiking, default: false, null: false
      t.boolean :wildlife_watching, default: false, null: false

      t.timestamps
    end
    add_index :activities, :spot_id, unique: true
  end
end
