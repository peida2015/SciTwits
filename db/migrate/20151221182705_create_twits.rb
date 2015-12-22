class CreateTwits < ActiveRecord::Migration
  def change
    create_table :twits do |t|
      t.string :body, null:false
      t.integer :project_id, null:false
      t.integer :user_id, null:false

      t.timestamps null: false
    end
    add_index :twits, :project_id
    add_index :twits, :user_id
  end
end
