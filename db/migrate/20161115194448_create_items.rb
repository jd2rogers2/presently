class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :url
      t.text :description
      t.integer :purchaser_id
      t.integer :list_id

      t.timestamps
    end
  end
end
