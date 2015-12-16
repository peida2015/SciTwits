class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false
      t.integer :field_id, null: false
      t.text :significance, null: false
      t.string :subfield

      t.timestamps null: false
    end
  end
end
