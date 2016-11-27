class AddNotesAndPriceToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :notes, :text
    add_column :items, :price, :integer
  end
end
