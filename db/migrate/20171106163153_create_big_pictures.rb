class CreateBigPictures < ActiveRecord::Migration[5.1]
  def change
    create_table :big_pictures do |t|
      t.string :uuid
      t.string :name
      t.text :description
      t.text :flavor
      t.string :location
      t.string :time
      t.text :culture
      t.string :edges

      t.timestamps
    end
  end
end
