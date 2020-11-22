class EditDetails < ActiveRecord::Migration[5.2]
  def change
    remove_column :details, :min_nights
    add_column :details, :min_nights, :string
  end
end
