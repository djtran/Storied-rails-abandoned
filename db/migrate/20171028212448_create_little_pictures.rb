class CreateLittlePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :little_pictures do |t|
      t.string :tags

      t.timestamps
    end
  end
end
