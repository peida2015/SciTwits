class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :link, null: false
      t.string :type, null: false
      t.integer :project_id, null: false

      t.timestamps null: false
    end
    add_index :media, :project_id
  end
end
