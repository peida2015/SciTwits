class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false
      t.integer :field_id
      t.text :significance
      t.string :subfield

      t.timestamps null: false
    end
    add_index :projects, :title
  end
end
