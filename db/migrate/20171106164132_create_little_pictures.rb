class CreateLittlePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :little_pictures do |t|
      t.text :description
      t.text :flavor
      t.string :name
      t.string :tags
      t.string :uuid

      t.timestamps
    end
  end
end
