class CreateDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :details do |t|
      t.integer :spot_id, null: false
      t.boolean :min_nights, default: false, null: false
      t.string :check_in
      t.string :check_out
      t.string :cancelation_policy
      t.string :on_arrival

      t.timestamps
    end

    add_index :details, :spot_id, unique: true
  end
end
