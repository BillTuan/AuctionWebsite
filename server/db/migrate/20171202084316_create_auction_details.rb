class CreateAuctionDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :auction_details do |t|
      t.integer :product_id
      t.integer :user_id
      t.integer :currentPrice
      t.integer :MaxPrice
      t.timestamps
    end
  end
end
