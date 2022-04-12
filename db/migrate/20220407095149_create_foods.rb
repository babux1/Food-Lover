class CreateFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :foods do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.string :category
      t.timestamps
    end
  end
end
