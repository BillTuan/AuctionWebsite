class CreateWatchedItems < ActiveRecord::Migration[5.1]
  def change
    create_table :watched_items do |t|
      t.integer :user_id
      t.integer :product_id
      t.timestamps
    end
  end
end
