class CreateBigPictures < ActiveRecord::Migration[5.1]
  def change
    create_table :big_pictures do |t|
      t.string :location
      t.string :time
      t.text :culture
      t.string :links

      t.timestamps
    end
  end
end
