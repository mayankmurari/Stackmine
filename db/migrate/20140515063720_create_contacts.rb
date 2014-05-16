class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.integer :budget
      t.integer :timeframe
      t.string :message

      t.timestamps
    end
  end
end
