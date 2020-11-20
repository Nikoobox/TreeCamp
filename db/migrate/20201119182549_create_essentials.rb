class CreateEssentials < ActiveRecord::Migration[5.2]
  def change
    create_table :essentials do |t|
      t.integer :spot_id, null: false
      t.boolean :elevator, default: false, null: false
      t.boolean :campfire, default: false, null: false
      t.boolean :toilet, default: false, null: false
      t.boolean :pets, default: false, null: false

      t.timestamps
    end

    add_index :essentials, :spot_id, unique: true
  end
end
