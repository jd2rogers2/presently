class AddAboutmeAndBdayToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :aboutme, :string
    add_column :users, :bday, :date
  end
end
