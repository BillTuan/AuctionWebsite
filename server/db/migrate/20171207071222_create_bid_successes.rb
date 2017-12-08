class CreateBidSuccesses < ActiveRecord::Migration[5.1]
  def change
    create_table :bid_successes do |t|
      t.integer :product_id
      t.integer :bider_id
      t.integer :seller_id
      t.integer :lastPrice
      t.integer :status, default: 0
      # 0 đã thắng chưa thanh toán, 1 đã thanh toán đang giao, 2 đã giao
      t.string :description, default: ''
      t.timestamps
    end
  end
end
