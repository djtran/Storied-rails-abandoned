class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.string :name
      t.text :description
      t.text :flavor

      t.timestamps
    end
  end
end
